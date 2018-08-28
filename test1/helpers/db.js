const db ={
  /*
   * Saves an arbitrary object in a NoSQL database
   * db.save(obj: Object)
   */
  save : ()=>{},
  /*
   * Find all objects whose attibute @attr matches the regular
   * expression @what
   *db.find(attr: String, what: RegExp)
   */
  find : ()=>{}
}


module.exports = db;
