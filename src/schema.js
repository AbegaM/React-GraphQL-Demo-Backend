const gql = require("graphql-tag");

const typeDefs = gql`
 type TestData {
   id: ID 
   testData: String  
 }

 input TestDataInput {
   testData: String
 }

 type Query {
   getTestData: [TestData ] 
 }

 type Mutation {
   createTestData(input: TestDataInput): TestData 
 }
`;

module.exports = { typeDefs };
