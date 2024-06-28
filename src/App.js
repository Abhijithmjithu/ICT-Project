import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import Nav from'./components/navbar.jsx';
import Redirect from './components/404.jsx';
import Login from'./components/login.jsx';
import Home from './components/home.jsx';
import Signup from './components/signup.jsx';
import Footer from './components/footer.jsx'
function App() {
  return (
    <div>
    <div style={{padding:"10px",backgroundColor:"wheat"}}>

    <BrowserRouter>
      <Routes>
      <Route path="" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/navbar" element={<Nav />}></Route>
        <Route path="/*" element={<Redirect/>}></Route>


      </Routes>
    </BrowserRouter>  
    
    {/* <Home /> */}
    
   
    {/* <Footer /> */}
    </div>
    </div>
  );
}

export default App;
