import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Merch from "./Merch";
import Recipes from "./pages/Recipes";
import BuffaloWingsDownload from "./BuffaloWingsDownload";
import BlackenedSalmonDownload from "./BlackenedSalmonDownload";
import HoneyGlazedSalmon from "./HoneyGlazedSalmon";
import SalmonSlideDownload from "./SalmonSlideDownload";
import BreakfastDownload from "./BreakfastWrapDownload";
import AirFriedSrirachaWingsDownload from "./AirFriedSrirachaWingsDownload";
import Contact from "./Contact";
import Footer from "./Footer";
import MealPreps from "./MealPreps";
import Success from "./Success";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/preps" element={<MealPreps />}></Route>
        <Route path="/merch" element={<Merch></Merch>}></Route>
        <Route path="/recipes" element={<Recipes></Recipes>}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route
          path="/AirFriedSrirachaWingsDownload"
          element={
            <AirFriedSrirachaWingsDownload></AirFriedSrirachaWingsDownload>
          }
        ></Route>
        <Route
          exact
          path="/BuffaloWingsDownload"
          element={<BuffaloWingsDownload></BuffaloWingsDownload>}
        ></Route>
        <Route
          exact
          path="/BlackenedSalmonDownload"
          element={<BlackenedSalmonDownload></BlackenedSalmonDownload>}
        ></Route>
        <Route
          exact
          path="/HoneyGlazedSalmonDownload"
          element={<HoneyGlazedSalmon></HoneyGlazedSalmon>}
        ></Route>
        <Route
          exact
          path="/SalmonSlideDownload"
          element={<SalmonSlideDownload></SalmonSlideDownload>}
        ></Route>
        <Route
          exact
          path="/BreakfastWrapDownload"
          element={<BreakfastDownload></BreakfastDownload>}
        ></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
