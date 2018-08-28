import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import bookLayoutValidationComponent from './bookLayoutValidationComponent';

const BookLayout = ({book,  typeHandler,enableThisBook})=>{

  return <Card key={book.id} className={`book-layout ${enableThisBook ? '' : 'disabled-book'}`}>
      <CardMedia
        className="poster-image"
        image={book.image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {book.title}
        </Typography>
        <Typography component="p">
          {book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>typeHandler(book.type)}>
          {book.type}
        </Button>
      </CardActions>
    </Card>
}
export default bookLayoutValidationComponent(BookLayout)
