const pages = require("./data/pages-data.json");
const titles = require("./data/longer-title.json");

const getRandomPage = () => {
  const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

  return pages[rand];
};

const getLongerTitle = () => {
  
  return titles[0];
};


module.exports = { getRandomPage, getLongerTitle };