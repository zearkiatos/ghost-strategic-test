const generateRandomDescription = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  let description = '';

  while (description.length < length) {
    description += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return description;
}

const generateSpecialCharactes = () => {
  const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  return specialCharacters;
}


module.exports = { 
  generateRandomDescription, 
  generateSpecialCharactes
 };

