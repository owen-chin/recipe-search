import Grid from '@mui/material/Unstable_Grid2';
import ActionAreaCard from './Card';

interface Recipe {
  recipe: {
    label: string;
    calories: number;
    image: string;
    ingredients: {text: string}[];
    url: string;
  }
}

interface RecipesProps {
  recipeList: Recipe[];
}

function Recipes({recipeList}: RecipesProps) {
  return (
    <div className='Recipes'>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {recipeList.map((recipe, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <ActionAreaCard
              label={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Recipes