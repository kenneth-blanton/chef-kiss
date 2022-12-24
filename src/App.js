import NavBar from './NavBar';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Merch from './Merch';
import Recipes from './Recipes';
import Contact from './Contact';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='chef-kiss/' element={<Home></Home>}></Route>
        <Route exact path='chef-kiss/merch' element={<Merch></Merch>}></Route>
        <Route path='chef-kiss/recipes' element={<Recipes></Recipes>}></Route>
        <Route exact path='chef-kiss/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
