import './App.css';
import { Footer } from './components/Footer.js';
import { Header } from './components/Header.js'
import { Section1 } from './components/Section1.js';
import { Section2 } from './components/Section2.js';

export function App() {
  return (
    <>  
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Footer></Footer>
    </>
  );
}
