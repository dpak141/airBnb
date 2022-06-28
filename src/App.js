import './App.css';
import NavBar from './component/NavBar';
import Hero from './component/Hero';
import Card from './component/Card';

function App() {
  return (
    <div className='container'>
      <NavBar/>
      {/* <Hero/> */}
      <Card/>
    </div>
  );
}

export default App;
