import react from 'react'


 const Navbar = () => {
    return (
        <div style={{ padding: "10px", margin: "5px", border: "1px solid black", height: "50px", display: "flex",gap:"80px" }}>
            <h2 style={{color:"brown"}}>Navbar</h2>
            <h3 style={{marginLeft:"600px",color:"green"}}>Home</h3>
            <h3 style={{color:"green"}}>Support</h3>
            <h3 style={{color:"green"}}>About</h3>
            <h3 style={{color:"green"}}>Menu</h3>
            <h3 style={{color:"green"}}>Gallery</h3>

        </div>

    )
}

export default Navbar