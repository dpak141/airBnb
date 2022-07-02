import Star from "../images/star.png"


export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={props.item.coverImg} alt="katie-zaferes" />
            <div className="card--stats">
                <img className="card-star" src={Star} alt="star" />
                <span>{props.item.stats.ratings}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="cost--price"><strong>From ${props.item.price}</strong>/person</p>
        </div>
    )
}