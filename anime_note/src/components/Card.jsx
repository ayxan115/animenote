function Card ({img, seri, name,}) {
    return(
        <div className="anime_card">
            <img src={img} alt="" />
            <div className="anime_down">
                <div className="anime_title">
                     <p>{name}</p>
                     <span>серий: {seri}</span>
                </div>
                <button className="btn">
                    <img src="" alt="" />
                </button>                        
            </div>
        </div>
    )
}

export default Card;