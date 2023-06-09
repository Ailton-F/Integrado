import { FooterStyled } from '../assets/styles/FooterStyle';
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer(){
    return(
    <FooterStyled className="footer-bg">
        <footer className="py-3 container">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
            </ul>
            <p className="text-center text-white">© 2022 Company, Inc</p>
        </footer>
    </FooterStyled>
    )
}

export default Footer;