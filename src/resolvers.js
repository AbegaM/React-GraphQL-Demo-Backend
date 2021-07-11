const createTestData = (parent, { input }, ctx) => {};

const getTestData = (parent, { input }, ctx) => {
  return [
    { id: "222", testData: "Hello worled" },
    { id: "222", testData: "Test 2" },
    { id: "222", testData: "Test 3" },
  ];
};

module.exports = {
  Query: {
    getTestData,
  },

  Mutation: {
    createTestData,
  },
};
