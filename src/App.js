import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Slick from './Components/Slick';
import "./App.css"
import Spline from '@splinetool/react-spline';




function App() {

  return (
    <div className="App">
      <Nav />
      <Spline scene="https://prod.spline.design/SyN0pZF-50T8eGUK/scene.splinecode" style={{
        position: "absolute",
      }}/>
      <Header />
      <Services />
      <OurWork />
    </div>
  );
}

export default App;
