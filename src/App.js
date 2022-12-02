
import { BrowserRouter as Router, Route, 
  Routes, Link} from "react-router-dom";
  
import Header  from './components/Header';
import Home  from './components/Home';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css';




function App() {
  return (
    
    <Router>
      <Header/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route  path="/" element={<Header/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </Router>
    
     
   
  );
}

export default App;
