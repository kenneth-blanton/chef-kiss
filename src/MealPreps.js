// import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import img from "./images/mystery.png";

const MealPreps = () => {
  return (
    <div className="MealPreps">
      <h1>Meal Preps!</h1>
      <br />
      <section>
        <p id="mealTag">5 Meals For $55</p>
        <p id="mealTag2">(Plus $2 per Salmon or Steak Meal)</p>
      </section>
      <br />
      <h2>This Week's Menu</h2>
      <div className="MealPrepOptions">
        <div class="mealOpt">
          <img src={img} alt="" />
          {/* <p>Chef Salad</p> */}
          <p>Coming Soon!</p>
          {/* <button>Serve Me Up!</button> */}
        </div>
        <div class="mealOpt">
          <img src={img} alt="" />
          {/* <p>Chicken Fajita Bowl</p> */}
          <p>Coming Soon!</p>
          {/* <button>Serve Me Up!</button> */}
        </div>
      </div>
      <Carousel></Carousel>
    </div>
  );
};

export default MealPreps;
