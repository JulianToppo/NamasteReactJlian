const Restaurant = (props) => {
    
   if(!props.data.info){
        console.log("mtttt")
    }
    const {id,name,cloudinaryImageId:imageurl,sla:{deliveryTime:deliverytime},cuisines,avgRating:stars}=props.data.info;

    return (
        <div className="restaurant-container">
            <div className="restaurant-card">
                
                <div>
                    <img className="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageurl}>
                    </img>
                    <h3>{name}</h3>
                </div>

                <div className="restaurant-details">
                    <ul>
                        <li>{stars}</li>
                        <li>{deliverytime}</li>
                        <li >{cuisines.join(',')}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Restaurant;