import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="version">
                <p>tasklist v1.0</p>
            </div>
            <div className="dot"></div>
            <Link className="footer-nav" to="help-page">Help</Link>
            <div className="dot"></div>
            <Link className="footer-nav" to="privacy-content">Privacy</Link>

        </section>
     );
}
 
export default Footer;