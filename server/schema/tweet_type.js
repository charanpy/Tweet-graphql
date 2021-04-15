const graphql = require('graphql');
const UserType = require('./user-type');
const Author = require('../models/User');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;

const TweetType = new GraphQLObjectType({
  name: 'Tweet',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    heading: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
    },
    createdAt: {
      type: GraphQLString,
    },
    createdBy: {
      type: UserType,
      resolve(parentValue) {
        return Author.findOne({ username: parentValue.author });
      },
    },
  }),
});

module.exports = TweetType;
