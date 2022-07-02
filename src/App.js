import './App.css';
import NavBar from './component/NavBar';
import Hero from './component/Hero';
import Card from './component/Card';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
        <Card 
        img={item.id}
        item={item}
        />
    )
}) 



  return (
    <div className='container'>
      <NavBar/>
      <Hero/> 
      <section className='cards-list'>

      {cards}
      </section>
    </div>
  );
}

export default App;
