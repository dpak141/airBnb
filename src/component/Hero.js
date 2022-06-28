import Logo from "../images/photo-grid.png"
import "../index.css"

export default function Hero(){
    return(
        <section className="hero">
        <img src={Logo} alt="airbnb" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities leb by one-of-a-kind hosts-ll without leaving home.</p>
        </section>
    )
}