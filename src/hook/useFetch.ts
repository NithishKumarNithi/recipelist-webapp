import { useState, useEffect } from 'react'

export default function useFetch(url){
   const [data, setData] = useState(null);

   useEffect(() => {
    const getRecipes = async () => {
        try{
            const recipeReq = await fetch(url);

            if(!recipeReq.ok){
                throw Error("failed to fetch data");
            }

            const recipesData = await recipeReq.json();
            setData(recipesData);
        }
        catch {
            throw Error("failed to resolve");
        }
    };
    getRecipes();
   }, [url]);

   return data !== null ? data : [];
}