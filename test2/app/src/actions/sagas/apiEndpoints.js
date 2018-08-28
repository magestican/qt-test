
export const getBooks = (cb) =>{
  fetch(`${window.APP.apiPath}books`).then((response) => {
    if (response.status && response.status === 200){
       response.json().then((result)=>{
         cb(result);
      })
    } else {
        throw new DOMException(JSON.stringify(response))
    }
  }).catch(error => {
    throw error;
  });
}

export const getTypes = (cb) =>{
   fetch(`${window.APP.apiPath}types`).then((response) => {
    if (response.status && response.status === 200){
       response.json().then((result)=>{
         cb(result);
      })
    } else {
        throw new DOMException(JSON.stringify(response))
    }
  }).catch(error => {
    throw error;
  });
}
