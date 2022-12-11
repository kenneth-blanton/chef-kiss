import NavBar from './NavBar';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import About from './About';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
    <Routes>
      <Route exact path='chef-kiss/' element={<Home></Home>}></Route>
      <Route path='chef-kiss/about' element={<About></About>}></Route>
      <Route path='chef-kiss/recipes' element={<Recipes></Recipes>}></Route>
    </Routes>
    </div>
  );
}

export default App;
