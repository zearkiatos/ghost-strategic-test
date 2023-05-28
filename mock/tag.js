const tags = require("./data/tags_data.json");
const junkTags = require("./data/tags_junk_data.json")
const numberTags = require("./data/tags_numbers_data.json")

const getRandomTag = () => {
  const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

  return tags[rand];
};

const getRandomJunkTag = () => {
  const rand = parseInt((Math.random() * 500).toFixed(0), 10);

  return junkTags[rand];
};

const getRandomNumberTag = () => {
  const rand = parseInt((Math.random() * 500).toFixed(0), 10);

  return numberTags[rand];
};

module.exports = { getRandomTag, getRandomJunkTag, getRandomNumberTag };