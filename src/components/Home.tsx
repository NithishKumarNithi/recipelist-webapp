import { useState, useEffect } from 'react';   
import Section from './Section';

export default function Home() {
    const [recipes, setRecipes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch('https://dummyjson.com/recipes?limit=60');
            const result = await response.json();
            setRecipes(result.recipes);
            setIsLoading(false);
        }
        getRecipes();
    }, [])

    if(!recipes && isLoading) {
        return  <p>Loading ...</p>;
    }

    return  (
        <>
            <Section title={'Indian'} recipes={recipes} />
            <Section title={'Italian'} recipes={recipes} />
            <Section title={'Pakistani'} recipes={recipes} />
        </>
    );
        
}