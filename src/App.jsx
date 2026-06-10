
import 'bootstrap/dist/css/bootstrap.min.css';

// import Mynavbar from './Components/Mynavbar';
import "./Css/pagescss.css"
import Mymidpage from './Components/Midpage';
import About from './Components/About';
import Services from './Components/Services';
import Singup from './Components/Singup';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';
import Panel from './Components/Panel';

function Home1(){
  return(
    
    <>
    {/* <Mynavbar /> */}
    
    < Home />

    </>
  )
}



let App = ()=>{
  return(
    <>

    
    
     <BrowserRouter>
     <Header />
     
   <Routes>
      <Route index  element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path="/Singup" element={<Singup />} />
      <Route path="/Login" element={<Login/>} />
      <Route path='/Panel' element={<Panel />} />
    </Routes>
    </BrowserRouter>
    </>
   

  
 
   
  )
}

export default App;