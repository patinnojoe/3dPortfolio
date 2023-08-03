import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  Experience,
} from "./components";

// import {Ball, Computers, Earth, Stars} from './components/canvas';
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
