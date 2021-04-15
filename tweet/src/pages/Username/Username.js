import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../queries';
import Layout from '../../components/Layout/Layout';
import Input from '../../components/TextInput/TextInput';
import Typography from '../../components/Typography/Text';
import Grid from '@material-ui/core/Grid';
import Button from '../../components/Button/Button';
import Icon from '@material-ui/core/Icon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import useStyles from '../../styles';

export default function Username() {
  console.log('Username');
  const history = useHistory();
  if (localStorage.getItem('tweets')) {
    history.replace('/');
  }
  const classes = useStyles();
  const usernameRef = useRef(null);
  const [createUser] = useMutation(CREATE_USER);
  const OnSubmitHandler = () => {
    const username = usernameRef?.current?.value;
    if (!username) {
      alert('Username should not be empty');
      return false;
    }
    createUser({
      variables: {
        username,
      },
    })
      .then(({ data }) => {
        localStorage.setItem('tweets', JSON.stringify(data.createUser));
        usernameRef.current.value = '';
        history.replace('/');
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Layout>
      <Grid item xs={12}>
        <Typography variant='h4' text='Tweets App' />
      </Grid>
      <Grid item xs={12} className={classes.margin}>
        <Input label='Username' Component={AccountCircle} ref={usernameRef} />
      </Grid>
      <Grid item xs={12}>
        <Button
          text='Submit'
          endIcon={<Icon>send</Icon>}
          onClick={OnSubmitHandler}
        />
      </Grid>
    </Layout>
  );
}
