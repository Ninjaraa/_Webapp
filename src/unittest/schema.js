import { graphql, print } from "graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from "graphql";
import { ApolloLink, Observable } from "@apollo/client";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    name: { type: GraphQLString },
  }
});

let userData = [
  { name: "TestUser" },
];

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: {
      type: GraphQLList(UserType),
      resolve: () => userData
    },
    user: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
      },
      resolve: (_, { name }) => {
        const findUserByName = userData.find(
          (user) => user.name.toLowerCase() === name.toLowerCase()
        );
        if (!name || !findUserByName) return userData[0];
        return userData.find(
          (user) => user.name.toLowerCase() === name.toLowerCase()
        );
      }
    }
  }
});

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
      },
      resolve: function (_, { name }) {
        const result = userData.filter(
          (user) => user.name.toLowerCase() !== name.toLowerCase()
        );
        return (userData = result);
      }
    }
  }
});

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });

function delay(wait) {
  return new Promise((resolve) => setTimeout(resolve, wait));
}

export const link = new ApolloLink((operation) => {
  return new Observable(async (observer) => {
    const { query, operationName, variables } = operation;
    await delay(300);
    try {
      const result = await graphql({
        schema,
        source: print(query),
        variableValues: variables,
        operationName
      });
      observer.next(result);
      observer.complete();
    } catch (err) {
      observer.error(err);
    }
  });
});
