const gql = require("graphql-tag");

const typeDefs = gql`
 type TestData {
   test: String  
 }

 input TestDataInput {
   test: String
 }


 type Query {
   getTestData: [TestData] 
 }

 type Mutation {
   createTestData(input: TestDataInput): TestData 
   getSubscriptionData(input: TestDataInput): TestData
 }
`;

module.exports = { typeDefs };
