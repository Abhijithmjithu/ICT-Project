import { useState } from "react";
import Home from "./home";
import axios from "axios"
import Nav from "./navbar";
import { useNavigate } from "react-router-dom";
function Login(){
        const navigate = useNavigate();
        const [email, setEmail] = useState("");
        const [password,setPassword] = useState("");
        const [result,setResult]=useState("");
        // const [click,setClick] = useState();
        // axios.post()
    
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    async function handleClick(){
        setResult({
            email,password
        })
    }
    async function handleLinkClick(){
        navigate('/signup')
     }
    return(
        <div>
            <Nav/>
        <div style={{display:"flex",justifyContent:"center"}}>
            
    <div style={{textAlign:"center",marginTop:"10px",border:"4px groove black",borderRadius:"10px",padding:"50px",backgroundColor:"rgb(248, 242, 234)",maxWidth:"500px"}}>
    <h1>LOGIN</h1>
    <div>
        
    </div>
   
    <p>Sign in to access web page</p>
    <button style={{backgroundColor:"#1877F2",borderRadius:"10px",color:"white",padding:"3px"}}>Connect With Facebook</button>
    <p>sign in with email</p>
    <input type="email" name="username" id="username" placeholder="email" onChange={handleEmail}/>
    <br/>
    <input type="password" name="password" id="" placeholder="password" onChange={handlePassword}/>
    
    <div style={{marginTop:"10px"}}>
    <button onClick={handleClick} style={{borderRadius:"10px",marginRight:"10px",backgroundColor:"greenyellow",padding:"10px"}}>Sign In</button>
    <a href="">Forgot Password</a>
    </div>
    <p>no account ? <a href="" onClick={handleLinkClick} >Create an account</a></p>
    </div>
    </div>
    </div>
    );
}

export default Login;