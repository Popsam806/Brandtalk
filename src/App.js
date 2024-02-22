import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Slick from './Components/Slick';
import "./App.css"
import Spline from '@splinetool/react-spline';

function zoom_scroll(spline) {

  spline.setZoom(1.5)

}




function App() {
  const handleWheel = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <Nav />
      <Spline onScroll={handleWheel} scene="https://prod.spline.design/SyN0pZF-50T8eGUK/scene.splinecode" style={{
        position: "absolute",
        zIndex: -1,

      }} onLoad={zoom_scroll} />
      <Header />
      <Services />
      <OurWork />
    </div>
  );
}

export default App;
