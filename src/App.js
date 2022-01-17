import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
// import img1 from './components/images/katie.png'
import data from './components/data';

function App() {
  const cards = data.map(obj => {
    console.log(obj.coverImg)
    return (
      <Card
        rating={obj.stats.rating}
        description={obj.description}
        location={obj.location}
        title={obj.title}
        reviewCount={obj.stats.reviewCount}
        price={obj.price}
        coverImg={obj.coverImg} />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}
export default App;
