import startServer from './startServer';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

startServer(typeDefs, resolvers);

// const { ApolloServer, gql } = require('apollo-server')

// // Schema
// const typeDefs = gql`
//   type User {
//     _id: ID!
//     name: String!
//     email: String!
//     age: Float!
//     active: Boolean!
//   }

//   type Post {
//     _id: ID!
//     title: String!
//     content: String!
//     author: User!
//   }

//   type Query {
//     users: [User!]!
//     getUserByEmail(email: String!): User!
//   }

//   type Mutation {
//     createUser(name: String!, email: String!, age: Float!): User!
//   }
// `;

// const users = [
//   { 
//     _id: String(Math.random()), 
//     name: 'bruno sousa',
//     email: 'bruno_brian@gmail.com',
//     age: 26,
//     active: true
//   },
//   { 
//     _id: String(Math.random()), 
//     name: 'Francielly',
//     email: 'francielly@gmail.com',
//     age: 23,
//     active: false
//   },
//   { 
//     _id: String(Math.random()), 
//     name: 'Adriana sousa',
//     email: 'adriana@gmail.com',
//     age: 45,
//     active: true
//   }
// ];

// const resolvers = {
//   Query: {
//     users: () => users,
//     getUserByEmail: (_, args) => users.find(user => user.email === args.email)
//   },
//   Mutation: {
//     createUser: (_, args) => {
//       const { name, email, age } = args;

//       const newUser = {
//         _id: String(Math.random()),
//         name,
//         email,
//         age,
//         active: true
//       }

//       users.push(newUser);

//       return newUser;
//     }
//   }
// };

// const server = new ApolloServer({ typeDefs, resolvers });
// server.listen().then(({ url }) => console.log(`Server is running at ${url}` ));