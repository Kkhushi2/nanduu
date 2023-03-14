import logo from './logo.svg';
import './App.css';

import { Home } from './components/Home';
import { About } from './components/About';
import { Footer } from './components/Footer';
import Contactus from './components/Contactus';
import { Navbar } from './components/Navbar';
import WWS from './components/WWS';
import Contact from './components/Contactus';
import AboutUs from './components/AboutUs';
import Product from './components/Product'
import Statistics from './components/Statistics';

function App() {
  return (
   
    <div id="content-block">
       <Navbar/>
        <div className="content-push ">
       <div id="home"><Home/></div>
        
       
       <AboutUs/>
       <Statistics/>
         
       
          <div id="about">
          <About/>
          </div>
         
          <div id="contact">
           <Contact/>
        
          </div>
         
        
         <Product/>
          <Footer/>
        </div>
      </div>

      
    
  );
}

export default App;