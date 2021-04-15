import React from 'react';
import Typography from '@material-ui/core/Typography';

const Text = ({ variant, text, className = null }) => {
  return (
    <Typography variant={variant} gutterBottom className={className}>
      {text}
    </Typography>
  );
};

export default Text;
