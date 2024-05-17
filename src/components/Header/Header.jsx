import "./Header.css"

import logo from "../../assets/argentBankLogo.png" // Tell webpack this JS file uses this image
import iconSignin from "../../assets/icon-signin.png" // Tell webpack this JS file uses this image

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="Argent Bank Logo" />
            <div className="signin">
            <img className="signin-icon" src={iconSignin} alt="Sign In" />
            <p className="signin-text">Sign in</p>
            </div>
        </div>
    )
}
export default Header;