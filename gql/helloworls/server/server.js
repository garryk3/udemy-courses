const {gql, ApolloServer} = require('apollo-server');

const typeDefs = gql`
    type Query {
        greetings: String
    }
`;

const resolvers = {
    Query: {
        greetings: () => 'some value'
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen({port: 8000}).then(console.log);