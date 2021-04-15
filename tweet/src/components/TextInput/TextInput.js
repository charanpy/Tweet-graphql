import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const Input = React.forwardRef(({ label, Component }, ref) => (
  <TextField
    style={{ marginBottom: 16 }}
    // id='input-with-icon-textfield'
    label={label}
    variant='outlined'
    inputRef={ref}
    InputProps={
      Component && {
        startAdornment: (
          <InputAdornment position='start'>
            <Component color='primary' />
          </InputAdornment>
        ),
      }
    }
  />
));

export default Input;
