import NavBar from './NavBar';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/recipes" element={<Recipes></Recipes>}>
          <Recipes></Recipes>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
