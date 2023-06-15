import Recipe from "./recipes.json";
import { productsArray } from "./productStore";

const Recipes = () => {
  console.log(productsArray);
  return (
    <div className="home">
      {Recipe &&
        Recipe.map((recipe) => {
          return (
            <div className="bigCard" key={recipe.id}>
              <img src={recipe.image} alt="" />
              <p>{recipe.caption}</p>
              <a href={recipe.checkout}>
                <button>{recipe.cost}</button>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default Recipes;
