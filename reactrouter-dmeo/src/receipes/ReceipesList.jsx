import React from "react";
import useFetchHook from "../hooks/UseFetchHook";
import useWindowResize from "../hooks/useWindowResize";


export default function ReceipesList() {
  const { data, loading, error } = useFetchHook("https://dummyjson.com/recipes"); 

  const windowSize=useWindowResize()

  console.log(data, loading, error);

  if (loading) return <h1>Fetching data...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <h1 style={{color: windowSize.width < 768 ? 'red' : 'black'}}>ReceipesList Page</h1>
      <h1>Current window size {windowSize.width} and {windowSize.height}</h1>
      <ul>
        {data?.recipes?.length > 0 ? (
          data.recipes.map((recipeItem) => (
            <div key={recipeItem.id}>
              <img src={recipeItem.image || "https://via.placeholder.com/150"} alt={recipeItem.name} />
              <label htmlFor={recipeItem.name}>{recipeItem.name}</label>
            </div>
          ))
        ) : (
          <h3>No recipes found</h3>
        )}
      </ul>
    </div>
  );
}
