import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <div className='footer-strike'></div>
                    <Link to={'/'}>
                        <img src='https://in.bmscdn.com/webin/common/icons/logo.svg' />
                    </Link>
                    <div className='footer-strike'></div>
                </div>
                <div className="footer-icons">
                    <a href="#" className="icon-link"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="icon-link"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="icon-link"><i className="fab fa-youtube"></i></a>
                    <a href="#" className="icon-link"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="icon-link"><i className="fab fa-pinterest"></i></a>
                    <a href="#" className="icon-link"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-copyright">
                Copyright 2024 © BookyMyShowLite
            </div>
        </footer>
    )
}

export default Footer
