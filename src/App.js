import logo from './logo.svg';
import './App.css';

import { Home } from './components/Home';
import { About } from './components/About';
import { Footer } from './components/Footer';
import Contactus from './components/Contactus';
import WWS from './components/WWS';

function App() {
  return (
    <div id="content-block">
        <div className="content-push ">
          
          
         
          <div className="parallax-slide" id="home">
            <div className="parallax-clip">
              <div
                className="fixed-parallax  page1"
                style={{
                  backgroundImage:'url("https://dr.savee-cdn.com/things/5/d/46d55e1c5b80648ad71d46.webp")'
                }}
              >
                 
              <Home/>
              </div>
            </div>
          </div>
          <div id="about">
          <About/>
          </div>
          <div className="parallax-slide" id="wws">
            <div className="parallax-clip">
              <div
                className="fixed-parallax  page2"
                style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/young-woman-pharmacist-pharmacy_1303-25532.jpg?w=996&t=st=1678295003~exp=1678295603~hmac=799c23a9dde836ffd6b29b080440cf81872d997e7913fd67fb3d2dc56ed44bdd")' }}
              >
                 
               <WWS/>
              </div>
            </div>
          </div>
          <div id="contact">
          <Contactus/>
          </div>
         
         
           
          <Footer/>
        </div>
      </div>

      
    
  );
}

export default App;