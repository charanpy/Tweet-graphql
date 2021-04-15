import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '80%',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
  },
});

export default function Display({ tweet }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {tweet?.createdBy.username}
        </Typography>
        <Typography variant='h5' component='h2'>
          {tweet?.heading}
        </Typography>

        <Typography variant='body2' component='p'>
          {tweet.body}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
