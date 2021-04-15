const graphql = require('graphql');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = UserType;
