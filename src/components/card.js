
function Card(prop){
    let badgeText
    if (prop.item.openSpots===0){
        badgeText= "SOLD OUT"
    } else if (prop.item.location=== "Online"){
        badgeText= "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={`../images/${prop.item.img}`} className="card-image" alt="katie"/>
            <div className="ratings">
                <img src="../images/red-star.png" className="star" alt="star"/>
                <span>{prop.item.rating}</span>
                <span className="grey">({prop.item.reviewCount}) . </span>
                <span className="grey">{prop.item.location}</span>
            </div>
            <p>{prop.item.title}</p>
            <p><b>From ${prop.item.price}</b> / person</p>
       </div>
    )
}

export default Card