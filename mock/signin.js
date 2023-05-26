const accounts = require("./data/login-data.json");

const getRandomAccount = () => {
  const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

  return accounts[rand];
};

const getRandomPassword = () =>{
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
}

module.exports = { getRandomAccount,getRandomPassword };