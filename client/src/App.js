import './App.css';
import About from './components/About';
import Community from './components/Community';
import Creativity from './components/Creativity';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Ordinary from './components/Ordinary';
import Team from './components/Team';
import WhyRoamly from './components/WhyRoamly';
import Works from './components/Works';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Creativity />
      <About />
      <Community />
      <Works />
      <WhyRoamly />
      <Team/>
      <Ordinary />
      <Footer />
    </main>
  );
}

export default App;
