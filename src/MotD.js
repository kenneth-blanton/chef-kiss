import { Link } from "react-router-dom";
import Recipes from "./recipes.json";

const MotD = () => {
  var d = Math.floor(Math.random() * Recipes.length);

  if (d > Recipes.length) {
    d = Math.floor(Math.random() * Recipes.length);
  }

  return (
    <div className="motd">
      <div className="meal">
        <div className="mealTitle">
          <h1>Meal of the Day</h1>
        </div>
        <img src={Recipes[d].image} alt="mealPic" id="mealPic" />
        <div className="mealText">
          <p className="mealCap">{Recipes[d].caption}</p>
          <Link to="/recipes">
            <button className="mealLink">Go To Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MotD;
