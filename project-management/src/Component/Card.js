import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';


import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

function MultiActionAreaCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        
      </CardActionArea>
      <CardActions>
      <Button variant="contained" href='/Menu'>
        View
      </Button>
      </CardActions>
    </Card>
  );
}

export default function MultiActionAreaCardGrid() {
  const cardData = [
    {
      image: 'https://blog.travelcarma.com/wp-content/uploads/2018/08/bus-booking-1-1.jpg',
    },
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.Dp19To5g5WywF6XbRzYYzAAAAA&pid=Api&P=0&h=220',
      
    },
    {
      image: 'https://tse1.mm.bing.net/th?id=OIP.gcxYcLvheoSY7cz3dtajEgHaE8&pid=Api&P=0&h=220',
    },
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.xwUYcQA9jLTdDXXdY_B0rQHaE8&pid=Api&P=0&h=220',
    },
    {
      image: 'https://tse1.mm.bing.net/th?id=OIP.LLoHcNW70Vz63L7t9f_-VAHaHa&pid=Api&P=0&h=220',
    },
    {
    image: 'https://tse3.mm.bing.net/th?id=OIP.HFrOxyep7A0UTZyiNQBkqAHaE8&pid=Api&P=0&h=220',
    
    },
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MultiActionAreaCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}
