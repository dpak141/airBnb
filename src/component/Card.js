import Athelete from "../images/katie-zaferes.png"
import Star from "../images/star.png"


export default function(){
    return(
        <div className="card">
        <img className="card-img" src={Athelete} alt="katie-zaferes" />

        <div className="card--stats">
        <img className="card-star" src={Star} alt="star" />
        <span>5.0 </span>
        <span className="gray">(6) . </span>
        <span className="gray">USA</span>
        </div>
        <p className="title">Life Lessons with Katie Zaferes</p>
        <p className="cost"><strong>From $136</strong>/person</p>
        </div>
    )
}