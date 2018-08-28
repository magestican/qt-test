//a script/class that given 4 urls, it will send a request to each one of them and store the result in the database.
const db = require('../helpers/db');
const request = require('../helpers/request');
const obtainBaseUrl = require('../helpers/regularExpressions').obtainBaseUrl;


class UrlPingerAndSaver(){
  constructor(props){
    this.urls = props.urls || [];

    if (this.urls.length  ==  4){ //as per requirement
      this.script();
    }
  }

   async script () {
     const {urls} =  this.urls;

     for (const url of urls) {
       const requestReturnObjectRes = await request.get(url);
       if (requestReturnObjectRes.statusCode == 200){ //should i save only on success or also on error?

             db.save(requestReturnObjectRes);

             if (url.replace(obtainBaseUrl,'').indexOf('test.com') > -1) {
               console.log(request.body); // print to stdout
             }
       }
    }
  }




}
