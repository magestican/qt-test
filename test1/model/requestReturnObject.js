//https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html
class RequestReturnObject () {
  constructor(props){
    this.statusCode = props.statusCode || 200;
    this.body = props.body || {};
    this.headers = props.headers || [];
  }


}

module.exports = RequestReturnObject;
