import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [confirm,setConfirm] = useState("");
    const [result,setResult] =useState("");
    const [err,setError] = useState(false);

function handleEmail(e){
    setEmail(e.target.value)
}
function handlePassword(e){
    setPassword(e.target.value)
}
function handleName(e){
    setName(e.target.value)
}
function handleConfirm(e){
    setConfirm(e.target.value) 
}
function handleClick(e){
    if(password==confirm){
        setResult({
            name,email,password,confirm
        })
        setError(false)
        navigate('/home')
        axios.post('http://localhost:4000/signup',{
            name,
            email,
            password,
            confirm
        })}
    else{
        setError(true)
    }
}

    return(
        <div style={{display:"flex",justifyContent:"center"}}>
    <div style={{textAlign:"center",marginTop:"10px",border:"4px groove black",borderRadius:"10px",padding:"50px",backgroundColor:"rgb(248, 242, 234)",maxWidth:"500px"}}>
    <h1>SIGNUP</h1>
    <div>
        
    </div>
   
    <input type="text" name="name" id="name" placeholder="name" onChange={handleName}/>
    <br></br>
    <input type="email" name="username" id="username" placeholder="email" onChange={handleEmail}/>
    <br />
    <input type="password" name="password" id="password" placeholder="password" onChange={handlePassword}/>
    <br />
    <input type="password" name="password" id="password" placeholder="confirm password" onChange={handleConfirm}/>
    <br></br>
    <br></br>
    <div style={{marginTop:"10px"}}>
    <button onClick={handleClick} style={{borderRadius:"10px",marginRight:"10px",backgroundColor:"greenyellow",padding:"10px"}}>Sign Up</button>
    </div>
    <p>Already have an account ? <a href="/login" >Login</a></p>
        name:{result.name}<br/>
        email:{result.email}<br/>
        password:{result.password}<br/>
        repassword:{result.confirm}<br/>

        {/* {err==false?<a href="/home">Proceed to home page</a>:<p>INVALID</p>}<br/> */}
    </div>
      
    
    </div>
    );
}

export default Signup;