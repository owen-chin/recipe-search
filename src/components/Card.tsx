import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, List, ListItem, ListItemText } from '@mui/material';

interface RecipeProps {
  label: string;
  calories: number;
  image: string;
  ingredients: {text: string}[];
  url: string;
}

function ActionAreaCard({ label, calories, image, ingredients, url }: RecipeProps) {
  const elevation = 10
  return (
      <Card sx={{ maxWidth: 345 }} elevation={elevation}>
        <CardActionArea href={url} target='_blank'>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {label}
            </Typography>
            <Typography>
              {Math.round(calories)} Calories
            </Typography>
              <List>
                {ingredients && ingredients.map((ingredient, index: number) => (
                  <ListItem key={index}>
                    <ListItemText secondary={ingredient.text}></ListItemText>
                  </ListItem>
                ))}
              </List>
          </CardContent>
        </CardActionArea>
      </Card>    
  );
}

export default ActionAreaCard