const graphql = require('graphql');
const User = require('../models/User');
const Tweet = require('../models/Tweets');
const UserType = require('./user-type');
const TweetType = require('./tweet_type');

const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = graphql;

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: {
      type: UserType,
      args: {
        username: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      async resolve(_, { username }) {
        const user = await User.findOne({ username });
        if (!user) {
          const newUser = await User.create({ username });
          return newUser;
        }
        return user;
      },
    },
    createTweet: {
      type: TweetType,
      args: {
        heading: {
          type: new GraphQLNonNull(GraphQLString),
        },
        body: {
          type: new GraphQLNonNull(GraphQLString),
        },
        author: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      async resolve(_, { heading, body, author }) {
        const tweet = Tweet.create({
          heading,
          body,
          author,
        });
        return tweet;
      },
    },
    deleteTweet: {
      type: TweetType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      async resolve(_, { id }) {
        const tweets = await Tweet.findByIdAndDelete(id);
        return tweets;
      },
    },
  }),
});

module.exports = Mutation;
