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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/download" element={<Download />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
