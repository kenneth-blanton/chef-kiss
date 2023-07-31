import About from "./About";
import MotD from "./MotD";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Carousel></Carousel>
      <About></About>
      <MotD></MotD>
      <div className="nav-bar">
        <Link to="/merch">Merch</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/preps">Meal Preps</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
};

export default Home;
