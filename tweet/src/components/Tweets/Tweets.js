import React, { useRef } from 'react';
import Tweet from './Display';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TWEETS, CREATE_TWEET } from '../../queries';
import Typography from '../Typography/Text';
import Input from '../TextInput/TextInput';
import Button from '../Button/Button';

const Tweets = () => {
  const headingRef = useRef(null);
  const bodyRef = useRef(null);
  const { data } = useQuery(GET_TWEETS);
  const [createTweet] = useMutation(CREATE_TWEET, {
    refetchQueries: [{ query: GET_TWEETS }],
  });

  const submit = () => {
    const heading = headingRef?.current?.value;
    const body = bodyRef?.current?.value;
    if (!(heading && body)) {
      alert('Please fill all fields');
      return false;
    }
    createTweet({
      variables: {
        heading,
        body,
        author: JSON.parse(localStorage.getItem('tweets')).username,
      },
    });
    headingRef.current.value = '';
    bodyRef.current.value = '';
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 78,
      }}
    >
      <Input label='Topic' ref={headingRef} />
      <Input label='Body' ref={bodyRef} />
      <Button text='CREATE' onClick={submit} />
      <div style={{ marginTop: 20 }}>
        <Typography variant='h3' text='TWEETS' />
      </div>
      {data?.tweets &&
        data?.tweets.map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
    </div>
  );
};

export default Tweets;
