import './App.css'
import NavBar from './NavBar'
import Search from './Search';
import Recipes from './Recipes';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Search></Search>
      <Recipes></Recipes>
    </div>
  )
}

export default App
