import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

let typeDefs = 
`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title : 'cinquenta tons de conrno',
    author : 'Zé da padaria',
  },
  {
    title : 'Alice',
    author : 'Jonas do carro do ovo',
  },
];

const resolvers = {
  Query : {
    books : () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen : {port : 4000},
});

console.log(`🚀 Server ready at ${url}`);