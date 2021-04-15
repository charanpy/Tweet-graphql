import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      {children}
    </Grid>
  );
};

export default Layout;
