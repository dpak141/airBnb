import Logo from "../images/airbnb-logo.png"
import "../index.css"

export default function NavBar(){
    return(
        <nav>
        <img src={Logo} alt="airbnb" />
        </nav>
    )
}