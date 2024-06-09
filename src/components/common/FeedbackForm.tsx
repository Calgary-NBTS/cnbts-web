'use client';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MdClose } from 'react-icons/md';
import { FaPenFancy } from 'react-icons/fa6';
import { addFeedback } from '@/actions/addFeedbackAction';
import SubmitFeedbackButton from './SubmitFeedbackButton';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';

interface SnackState extends SnackbarOrigin {
  open?: boolean;
  text?: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FeedbackForm = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const ref = React.useRef<HTMLFormElement>(null);
  const reRef = React.useRef<ReCAPTCHA>(null);
  const [formOpen, setFormOpen] = React.useState(false);
  const [snackState, setSnackState] = React.useState<SnackState>({
    open: false,
    text: '',
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal, open, text } = snackState;

  const handleShowSnack = (inputText: string) => {
    setSnackState({ ...snackState, text: inputText, open: true });
  };

  const handleCloseSnack = () => {
    setSnackState({ ...snackState, open: false });
  };

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="Direct message form">
        <Button onMouseDown={handleFormOpen} color="primary">
          <Typography
            variant="h3"
            component="h4"
            sx={{ color: 'primary.contrastText' }}
          >
            <FaPenFancy />
          </Typography>
        </Button>
      </Tooltip>
      <Dialog
        open={formOpen}
        fullScreen={fullScreen}
        onClose={handleFormClose}
        TransitionComponent={Transition}
        aria-labelledby="form to submit feeback"
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: `linear-gradient(135deg, ${theme.vars.palette.primary.main}, var(--mui-palette-secondary-main))`,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            // borderBottom: '1px solid rgba(0, 0, 0, 0.22)',
            boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.2)',
            color: theme.vars.palette.primary.contrastText,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 46%, ${theme.vars.palette.primary.dark} 100%)`,
          }}
        >
          <Box sx={{ p: 1 }}>
            <Typography variant="h6">How can we help?</Typography>
          </Box>
          <IconButton onMouseDown={handleFormClose}>
            <MdClose />
          </IconButton>
        </Box>
        <form
          ref={ref}
          action={async (formData) => {
            const token = await reRef.current?.executeAsync();
            reRef.current?.reset();
            formData.append('token', token || '');
            const { error } = await addFeedback(formData);
            if (error) {
              handleShowSnack('Error submitting feedback, please try again');
            } else {
              handleShowSnack('Feedback submitted, thank you');
              handleFormClose();
              ref.current?.reset();
            }
          }}
        >
          <Box sx={{ flexDirection: 'column', p: 1.75 }}>
            <Box>
              <TextField
                id="name"
                name="name"
                label="Name (optional)"
                variant="filled"
                fullWidth
                sx={{ marginY: 1 }}
              />
              <TextField
                id="email"
                name="email"
                label="Email (optional)"
                variant="filled"
                fullWidth
                sx={{ marginY: 1 }}
              />
            </Box>
            <Box>
              <TextField
                id="message"
                name="message"
                label="Message"
                variant="filled"
                multiline
                rows={4}
                fullWidth
                required
                sx={{ marginY: 1 }}
              />
            </Box>
            {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                size="invisible"
                ref={reRef}
              />
            )}

            <Box sx={{}}>
              <SubmitFeedbackButton />
            </Box>
          </Box>
        </form>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleCloseSnack}
        message={text}
        open={open}
        key={text}
      />
    </React.Fragment>
  );
};

export default FeedbackForm;
