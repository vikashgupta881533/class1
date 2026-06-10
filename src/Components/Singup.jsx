import { useState } from "react";   
import { useNavigate } from "react-router-dom";
function Singup(){

    let[singupdata , setsingupdata] = useState({})
    let navigate = useNavigate()

    function data(event){
        let {name,value} = event.target
        setsingupdata({...singupdata,[name]:value})
        
    }

    function submit(e){
        e.preventDefault()
        console.log(singupdata)
        localStorage.setItem("signkey",JSON.stringify(singupdata))
        navigate('/Login')
    }
    return(
        <>
        <form className="singup-form" onSubmit={submit}>
            <label>Name</label>
            <input type="text" name="name" onChange={data} /> <br /> 
            <label>mobileno</label>
            <input type="text" name="mobileno" onChange={data} /> <br /> 
            <label>password</label>
            <input type="text" name="password" onChange={data} /> <br /> 
            <label>email</label>
            <input type="text" name="email" onChange={data} /> <br /> 
            <label>country</label>
            <input type="text" name="country" onChange={data} /> <br /> 
            <button type="submit">submit</button>
        </form>

        </>


    )
}

export default Singup;