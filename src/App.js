import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
// import Contact from "./Contact.js";
 import {BrowserRouter as  Router,Routes,Route,Link } from "react-router-dom";
function App() {
  return (
    <div>
       <Router> 
      <nav>
        <ul>
          <li>React Devloper</li>
          <li><Link to='/home' class="Home">Home</Link></li>
          <li><Link to='/about' class="About">About</Link></li>
          <li class="Contact">Contact</li>
          <li>gallery</li>
          <li>page</li>
          <li>
            <button class="join">join class</button>
          </li>
        </ul>
      </nav>  
    <Routes>
          <Route path="/home" element={<Home/>}></Route>
         {/* <Route path="/contact" element={<Contact />}></Route>  */}
           <Route path="/about" element={<About/>}></Route>
        </Routes>
       </Router> 
    </div>
  );
}
export default App;
 