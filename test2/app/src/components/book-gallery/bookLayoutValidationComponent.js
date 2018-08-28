import React, { Component } from 'react';

function bookLayoutValidationComponent (ChildComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state ={
        errors : ''
      }
    }
    componentWillMount(){
      this.validateBook();
    }
    componentWillReceiveProps(nextProps){

      this.validateBook()
    }

    validateBook =()=>{
      const {book} = this.props;
      let errors = [];
      if (!book.id){
          errors.push(<div>'id is missing'</div>)
      }
      if (!book.title){
          errors.push(<div>'title is missing'</div>)
      }
      if (!book.type){
          errors.push(<div>'type is missing'</div>)
      }
      if (!book.image){
          errors.push(<div>'image is missing'</div>)
      }
      if (!book.description){
          errors.push(<div>'description is missing'</div>)
      }
      this.setState({errors: errors})
    }

    render() {
      const {errors} = this.state;
      return errors.length > 0 ? <div>{errors}</div>  : <ChildComponent  {...this.props} />;
    }
  };
}
export default bookLayoutValidationComponent;
