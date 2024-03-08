import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Pricing from './Component/Pricing';
import Download from './Component/Download';
import Blog from './Component/Blog';
import Home from './Component/Home';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/download" element={<Download />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
