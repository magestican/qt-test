import React from 'react';
import TextField from '@material-ui/core/TextField';

export const getSearchButton = (handleSearch)=>{
  return <div><TextField
     id="search"
     label="Search field"
     type="search"
     className="book-search"
     margin="normal"
     onChange={handleSearch}
   /></div>
}
