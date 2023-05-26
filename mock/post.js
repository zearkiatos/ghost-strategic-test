const post = require("./data/post_data.json");
const titles = require("./data/longer-title.json");
const posts = require("./data/Posts.json");

const getRandomPost = () => {
  const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

  return posts[rand];
};

const getRandomPosts = () => {
  const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

  return post[rand];
};

const getLongerTitle = () => {
  
  return titles[0];
};

module.exports = { getRandomPost,getRandomPosts,getLongerTitle };










