'use client';
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addFeedback } from '@/actions/addFeedbackAction';

const FeedbackForm = () => {
  return (
    <form
      action={async (formData) => {
        await addFeedback(formData);
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
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default FeedbackForm;
