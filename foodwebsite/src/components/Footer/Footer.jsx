import "./Footer.css"
const Footer=()=>{
    return(
        <>
        <div className="footer" id="footer">
            <div className="footer-content">
                    <div className="footer-content-left">
                        <h1>Food App</h1>
                        <p>...</p>
                    </div>
                    <div className="footer-content-center">
                        <h2>Company</h2>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Delivery</li>
                                <li>Privacy Policy</li>
                            </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>Get In Touch</h2>
                        <ul>
                            <li>FoodApp@gmail.com</li>
                        </ul>
                    </div>
            </div>
            <hr/>
            <p className="footer-copyright">CopyRight 2024 © FoodApp</p>
        </div>
        </>
    )
}

export default Footer;