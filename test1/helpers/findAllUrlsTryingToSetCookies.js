const db = require('../helpers/db');

const findAllUrlsTryingToSetCookies = ()=>{
  return db.find('headers',/Set-Cookie/);
}

module.exports = findAllUrlsTryingToSetCookies;
