import { db } from "../database/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const MealPrepCarousel = () => {
  const [prepList, setPrepList] = useState([]);

  useEffect(() => {
    async function getAllPreps() {
      const querySnapshot = await getDocs(collection(db, "mealPreps"));
      const allPreps = querySnapshot.docs;
      setPrepList(allPreps);
    }
    getAllPreps();
  }, []);

  return (
    <div className="Carousel">
      <div className="slide-track">
        {prepList &&
          prepList.map((recipe) => {
            return (
              <div className="card" key={recipe.id}>
                <img src={recipe.data().image} alt="" />
                <p>{recipe.data().title}</p>
              </div>
            );
          })}
        {prepList &&
          prepList.map((recipe) => {
            return (
              <div className="card" key={recipe.id}>
                <img src={recipe.data().image} alt="" />
                <p>{recipe.data().title}</p>
              </div>
            );
          })}
        {prepList &&
          prepList.map((recipe) => {
            return (
              <div className="card" key={recipe.id}>
                <img src={recipe.data().image} alt="" />
                <p>{recipe.data().title}</p>
              </div>
            );
          })}
        {prepList &&
          prepList.map((recipe) => {
            return (
              <div className="card" key={recipe.id}>
                <img src={recipe.data().image} alt="" />
                <p>{recipe.data().title}</p>
              </div>
            );
          })}
        {prepList &&
          prepList.map((recipe) => {
            return (
              <div className="card" key={recipe.id}>
                <img src={recipe.data().image} alt="" />
                <p>{recipe.data().title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MealPrepCarousel;
