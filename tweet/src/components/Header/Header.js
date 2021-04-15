import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from '../../styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '../Typography/Text';
import Button from '@material-ui/core/Button';

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  console.log(history);

  const logout = () => {
    localStorage.removeItem('tweets');
    history.replace('/username');
  };

  return (
    <AppBar position='fixed' color='transparent'>
      <Toolbar>
        <Typography variant='h5' text='Tweets' className={classes.grow} />
        {history.location.pathname === '/' && (
          <Button color='inherit' onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
