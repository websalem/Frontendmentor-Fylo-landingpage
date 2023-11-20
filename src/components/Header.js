import logo from '../assets/images/logo.svg';
import Navbar from './Navbar';
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo"><img src={logo} alt="logo" /></div>
                <Navbar />
            </div>
        </header>
    )
}
export default Header