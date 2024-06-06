'use client';
import React from 'react';
import Button from '@mui/material/Button';
import { useFormStatus } from 'react-dom';

const SubmitFeedbackButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit Feedback'}
    </Button>
  );
};

export default SubmitFeedbackButton;
