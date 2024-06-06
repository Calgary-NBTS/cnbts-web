'use client';
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { addFeedback } from '@/actions/addFeedbackAction';
import SubmitFeedbackButton from './SubmitFeedbackButton';

interface SnackState {
  open?: boolean;
  text?: string;
}

const FeedbackForm = () => {
  const ref = React.useRef<HTMLFormElement>(null);
  const [snackState, setSnackState] = React.useState<SnackState>({
    open: false,
    text: '',
  });

  const handleShow = (text: string) => () => {
    setSnackState({ text, open: true });
  };

  const handleClose = () => {
    setSnackState({ ...snackState, open: false });
  };

  return (
    <form
      ref={ref}
      action={async (formData) => {
        const { error } = await addFeedback(formData);
        if (error) {
          handleShow('Error submitting feedback, please try again');
        } else {
          handleShow('Feedback submitted, thank you');
          ref.current?.reset();
        }
      }}
    >
      <Box sx={{ flexDirection: 'column' }}>
        <Box>
          <TextField
            id="name"
            name="name"
            label="Name (optional)"
            variant="outlined"
            fullWidth
            sx={{ marginY: 1 }}
          />
          <TextField
            id="email"
            name="email"
            label="Email (optional)"
            variant="outlined"
            fullWidth
            sx={{ marginY: 1 }}
          />
        </Box>
        <Box>
          <TextField
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            sx={{ marginY: 1 }}
          />
        </Box>
        <Box>
          <SubmitFeedbackButton />
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleClose}
        message={snackState.text}
        open={snackState.open}
        key={snackState.text}
      />
    </form>
  );
};

export default FeedbackForm;
