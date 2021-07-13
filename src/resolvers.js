const db = require("./db");

const createTestData = async (parent, { input }, ctx) => {
  try {
    var test = input.test;
    var data = await db.query("INSERT INTO tests (test) VALUES ($1)", [test]);
    return {
      test,
    };
  } catch (error) {
    console.log(error);
  }
};

const getTestData = async (parent, { input }, ctx) => {
  try {
    var data = await db.query("SELECT * FROM tests");
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};

const getSubscriptionData = (parent, { input }, ctx) => {
  return { test: input.test };
};

module.exports = {
  Query: {
    getTestData,
    getSubscriptionData,
  },

  Mutation: {
    createTestData,
  },
};
