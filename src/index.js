require("dotenv").config();
const { ApolloServer } = require("apollo-server"); 

const {typeDefs} = require("./schema")
const resolvers = require("./resolvers")

const server = new ApolloServer({
    rootValue: '/api',
    typeDefs,
    resolvers
});

const port = process.env.PORT;

server.listen(port).then(() => console.log(`Server running on port ${port}`));
