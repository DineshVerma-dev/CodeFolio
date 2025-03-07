import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-ignore
import Navbar from './main/Navbar';
import About from './main/About';
import Test from './Test';

// @ts-ignore
const Home = () => <div>Home Page</div>;


const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/work" element={<Work />} />
            <Route path="/post" element={<Post />} />
            <Route path="/gallery" element={<Gallery />} /> */}
          </Routes>
    </Router>
    </>
    
  );
};

export default App;
