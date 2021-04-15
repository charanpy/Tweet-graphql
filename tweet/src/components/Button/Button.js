import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = (props) => {
  return (
    <Button variant='contained' color='primary' size='large' {...props}>
      {props.text}
    </Button>
  );
};

export default ButtonComponent;
