import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Slick from './Components/Slick';
import "./App.css"
import Spline from '@splinetool/react-spline';

let i = 0.4
function zoom_scroll(spline) {
 
    spline.setZoom(5)

}

// const startSpin = (splineRef, speed=1) => {
//   const spline = splineRef.current;
//   const objectToRotate = spline.root() // Replace with your object name

//   if (!objectToRotate) {
//     console.error('Object not found:', 'YourObjectName');
//     return;
//   }

//   function spin() {
//     const rotationSpeed = 360 * speed; // Degrees per second

//     objectToRotate.transform.rotation.y += rotationSpeed * 0.001; // Adjust for time unit (1ms)

//     requestAnimationFrame(spin);
//   }

//   spin();
// };



function App() {

  return (
    <div className="App">
      <Nav />
      <Spline scene="https://prod.spline.design/SyN0pZF-50T8eGUK/scene.splinecode" style={{
        position: "absolute",
        
      }} onLoad={zoom_scroll} />
      <Header />
      <Services />
      <OurWork />
    </div>
  );
}

export default App;
