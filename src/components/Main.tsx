import { useState, useEffect } from 'react';
import Section from './Section';

export default function MainBody() {
  const [recipes, setRecipes] = useState(null)
  
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch('https://dummyjson.com/recipes?limit=60');
      const result = await response.json();
      setRecipes(result.recipes)
    }
    getRecipes();
  }, [])

  return (
    <main className="max-w-5xl p-2 mx-auto">
      { !recipes 
      ? <p>No Data Available</p> 
      : (
        <>
          <Section title={'Indian'} recipes={recipes} />
          <Section title={'Italian'} recipes={recipes} />
          <Section title={'Pakistani'} recipes={recipes} />
        </>
      )}
    </main>
    

  );
}
