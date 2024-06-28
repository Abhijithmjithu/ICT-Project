function Footer(){
    return(
        <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"black",borderRadius:"10px",paddingLeft:"6px",paddingRight:"6px"}}>
        <table style={{color:"white"}}>
            <tr>
                <th>RESOURCES</th>
                <th>LEGAL</th>
                <th>COMMUNITY</th>
            </tr>
            <tr>
                <th>BLOG</th>
                <th>DOCS</th>
                <th>STATUS</th>
            </tr>
        </table>
        </div>
    )
}

export default Footer;