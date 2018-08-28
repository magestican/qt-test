import React, { Component } from 'react';
import {getTypes,getBooks} from '../../actions/sagas/apiEndpoints';
import  BookLayout from './bookLayout';
import {getSearchButton} from './searchButton';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      types : [],
      books : [],
      filteredBooks : [],
      selectedType : ''
    }
  }

  componentWillMount(){
    getTypes((res)=>{
      this.setState({types:res})
    });
    getBooks((res)=>{
      this.setState({books:res})
    });
  }

  typeHandler = (type) =>{
    this.setState({selectedType : type})
  }

  handleSearch = (ev)=>{
    const {books} = this.state;
    let foundBooks = [];
    if (ev.target.value && ev.target.value !== ''){
      foundBooks = books.filter( book => (book.title + book.type).trim().toLowerCase().indexOf(ev.target.value.toLowerCase()) > -1);
      foundBooks = foundBooks.map(book => book.id);
    }
    this.setState({filteredBooks : foundBooks});
  }

  filterBook = (book)=>{
    const {filteredBooks} = this.state;
    return filteredBooks.length === 0 ? true : (filteredBooks.find(x => x === book.id) ?  true : false);
  }

  render() {
    const {books} = this.state;



    const booksInSearch = books.filter((book) => this.filterBook(book));
    const bookOutsideSearch =  books.filter((book) => !this.filterBook(book));

    return (
      <div className="book-gallery">
         {getSearchButton(this.handleSearch)}
        {booksInSearch.map((book)=>{
          return  <div className="span-like"><BookLayout book={book} typeHandler={this.typeHandler} enableThisBook={true}/></div>
        })}
        {bookOutsideSearch.map((book)=>{
          return <div className="span-like"><BookLayout book={book}  typeHandler={this.typeHandler} enableThisBook={true}/></div>
        })}
      </div>
    );
  }
}

export default App;
