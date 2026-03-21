import { useParams } from 'react-router';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import useFetch from '../hook/useFetch'


export default function SingleRecipe(){
    let { recipeId } = useParams();

    const recipe = useFetch(`https://dummyjson.com/recipes/${recipeId}`)
    console.log(recipe)
    return (
        <div className="max-w-2xl mx-auto"> 
            { 
            
            !recipe 
            ? (
                <Box>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>
              )
            : (
                <Card>
                <CardMedia
                    sx={{ height: 375 }}
                    image={recipe.image}
                    title={recipe.name}
                />
                <CardContent>
                    <p><b>Recipe : </b>{recipe.name}</p>
                    <p><b>Meal Type : </b>{recipe.mealType[0]}</p>
                    <p><b>Servings : </b>{recipe.servings}</p>
                    <p>
                        <b>Ingredients : </b>
                        <Stack direction="row" spacing={1}>
                            {recipe.ingredients.map((incredient) => <Chip label={incredient} />)}                            
                        </Stack>
                    </p>
                    <p>
                        <b>Instructions : </b>
                        <ol>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                        </ol>
                    </p>
                </CardContent>
            </Card>

            )
            
            }
            
        </div>
    )
}