import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($username: String!) {
    createUser(username: $username) {
      id
      username
    }
  }
`;

export const GET_TWEETS = gql`
  query Tweets {
    tweets {
      body
      heading
      id
      createdBy {
        username
      }
    }
  }
`;

export const CREATE_TWEET = gql`
  mutation CreateTweet($heading: String!, $body: String!, $author: String!) {
    createTweet(heading: $heading, body: $body, author: $author) {
      id
    }
  }
`;
