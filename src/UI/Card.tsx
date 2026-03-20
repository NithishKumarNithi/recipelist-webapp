import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface RecipeCardProps {
    image: string,
    name: string,
    cuisine: string,
    difficulty: string,
    rating: number
}

export default function CardComponent(props: RecipeCardProps){
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt="green iguana"
                />
                <CardContent>
                <h5 className="font-bold mb-2">
                    {props.name}
                </h5>
                <div className="flex flex-wrap gap-2">
                    <Chip label={`Cuisine : ${props.cuisine}`}></Chip>
                    <Chip label={`Difficulty : ${props.difficulty}`}></Chip>
                </div>
                <div className="flex align-center mt-2">
                    <span className="font-bold me-2">{props.rating}</span>
                    <Rating name="half-rating-read" defaultValue={props.rating} precision={0.1} readOnly />
                </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}