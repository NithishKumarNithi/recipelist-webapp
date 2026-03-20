import { Link } from 'react-router';
import CardComponent from '../UI/Card';

export default function Section({
  title,
  recipes,
}: {
  title: string;
  recipes: any;
}) {

  const recipeList = recipes.filter((recipe) => recipe.cuisine == title).slice(0,4)

  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      {
      recipeList.length === 0 
      ? <p>no data</p> 
      : recipeList.map(recipe => (
        <Link to={`/recipes/${recipe.id}`} key={recipe.id} >
          <CardComponent 
            image={recipe.image} 
            name={recipe.name}
            cuisine={recipe.cuisine}
            difficulty={recipe.difficulty}
            rating={recipe.rating}
          />
          </Link>
          )
        )
      }
      </div>

    </section>
  );
}
