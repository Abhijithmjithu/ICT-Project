import Login from "./login";

function Nav(){
    return(
        <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"grey",borderRadius:"10px",paddingLeft:"6px",paddingRight:"6px"}}>
            <h1 style={{backgroundColor:"white",color:"black",border:"2.5px solid brown",borderRadius:"10px"}}>HELLO</h1>
            <div style={{alignItems:"center",gap:"20px",display:"flex",backgroundColor:"white",border:"2.5px solid brown",borderRadius:"10px",padding:"10px",margin:"20px"}}>
                <a href="/home">Home</a>
                <a href="/home">About us</a>
                <a href="/home">Feedback</a>
            </div>
            <div style={{alignContent:"center",backgroundColor:"white",border:"2.5px solid brown",borderRadius:"10px",padding:"10px",margin:"23px"}}>
                <a href="/login">Login</a>
            </div>
        </div>
    );
}

export default Nav;

