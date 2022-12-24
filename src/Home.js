import About from "./About";
import MotD from "./MotD";
import Carousel from "./Carousel";


const Home = () => {

    return ( 
        <div className="home">
            <Carousel></Carousel>
            <About></About>
            <MotD></MotD>
        </div>
     );
}
 
export default Home;