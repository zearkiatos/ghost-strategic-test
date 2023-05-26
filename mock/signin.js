const accounts = require("./data/login-data.json");

const getRandomAccount = () => {
  const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

  return accounts[rand];
};

module.exports = { getRandomAccount };