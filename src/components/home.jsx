import Nav from "./navbar";
function Home(){
    return(
        <div>
            <Nav />
        
        <div style={{border: "5px double black",
            color: "black",
            borderRadius: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "100px",
            padding: "20px",
            textAlign: "center",
            maxWidth: "450px"}}>
        <h1>ABOUT US</h1>
    <div style={{color:"black"}}>
        <p>Welcome to [Your E-commerce Website Name]

            At [Your E-commerce Website Name], we believe in making online shopping a delightful and hassle-free experience. Founded with a passion for [describe your mission or vision, e.g., offering high-quality products, exceptional customer service, etc.], we aim to [describe your goals, e.g., revolutionize the way people shop for [specific products], provide affordable luxury, etc.].
            
            Our journey began [mention the founding year or backstory if relevant]. Since then, we have grown to become a trusted destination for [your niche or products]. Whether you're looking for [list key product categories] or seeking [mention any special services or features], we are committed to bringing you a curated selection of [describe your products' unique selling points, e.g., stylish, sustainable, innovative].
            
            What sets us apart is our dedication to [highlight any unique aspects of your business, e.g., sustainable practices, community engagement, etc.]. Our team of [mention your team's expertise, e.g., industry experts, dedicated support staff] works tirelessly to ensure every purchase exceeds your expectations. We value transparency, integrity, and your satisfaction above all else.
            
            Thank you for choosing [Your E-commerce Website Name]. Join us in exploring a world of [mention your product benefits or experiences]. Shop with confidence, knowing that each item is handpicked with you in mind.
            
            Explore, discover, and indulge at [Your E-commerce Website Name].</p>
    </div>
    </div>
    </div>
    )
}

export default Home;