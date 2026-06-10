import { useState } from "react"; 
import Header from "./Header";  
import { useNavigate } from "react-router-dom";


function Home(){
  return(
    <>
    {/* <Mynavbar /> */}
    <Header />
   

    </>
  )
}

function Login(){

    let[singupdata , setsingupdata] = useState({})
    let navigate = useNavigate()

    function data(event){
        let {name,value} = event.target
        setsingupdata({...singupdata,[name]:value})
        
    }

    function submit(e){
        e.preventDefault()
        console.log(singupdata)
        let localdata = JSON.parse(localStorage.getItem("signkey"))
        if(singupdata.email != localdata.email || singupdata.password != localdata.password){
            alert("Details Wrong")
        }else{
            alert("sucess")
            navigate('/Panel')
        }
    }
    return(
        <>
        <form onSubmit={submit} className="login-form">
            
            <label>Email</label>
            <input type="text" placeholder="Enter Email" name="email" onChange={data} /> <br /> 
            <label>Password</label>
            <input type="text" placeholder="Enter  Password" name="password" onChange={data} /> <br /> 
             
            <button type="submit">submit login details</button>
        </form>

        

        </>


    )
}

export default Login;