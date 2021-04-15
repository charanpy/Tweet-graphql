const graphql = require('graphql');
const User = require('../models/User');
const Tweet = require('../models/Tweets');
const UserType = require('./user-type');
const TweetType = require('./tweet_type');
const mutation = require('./mutation');

const {
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      },
    },
    tweets: {
      type: new GraphQLList(TweetType),
      resolve() {
        return Tweet.find({}).sort({
          createdAt: 'desc',
        });
      },
    },
    tweet: {
      type: TweetType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(_, { id }) {
        return Tweet.findById(id);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
