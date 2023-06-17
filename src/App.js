import './App.css';
import NavigationBar from './components/nav-bar';
import Card from './components/card';
import Hero from './components/hero';
import data from './components/data';

// import Katie from "../images/Katie.jpeg"

function App() {

  const card = data.map(item=>{
      return(
        <Card
        item={item}
        />
      )
  }
  )
  return (
    <div className="container">
      <NavigationBar/>
      <Hero/>
      <div className='cards'>{card}</div>
    </div>
  );
}

export default App;
