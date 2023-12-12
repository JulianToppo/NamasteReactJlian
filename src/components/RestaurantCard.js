const Restaurant = (props) => {
    
   if(!props.data.info){
        console.log("mtttt")
    }
    const {id,name,cloudinaryImageId:imageurl,sla:{deliveryTime:deliverytime},cuisines,avgRating:stars}=props.data.info;
    let listofcuisines=cuisines.join(',')
    if(listofcuisines.length> 20){
        listofcuisines= listofcuisines.slice(0,18)+'...'
    }
    
    let sliceName=name
    if(sliceName.length> 25){
        sliceName= name.slice(0,23)+'...'
    }
        
    
    return (
        <div className="restaurant-container flex flex-col w-72 p-6 ">
            <div className="restaurant-card h-70 bg-yellow-100 rounded-lg p-3">
                
                <div className="place-items-center">
                    <img className="res-image rounded-lg h-40 w-60" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageurl}>
                    </img>
                    <h3 className="font-bold">{sliceName}</h3>
                </div>

                <div className="restaurant-details m-4">
                    <ul>
                        <li className=" font-light">{stars+" "+"Delivery Time:"+ deliverytime+"mins"}</li>
                        
                        <li >{listofcuisines
                      }</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export const PromotedLabelRestaurant=(Restaurant)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white p-3 mt-3 rounded-full">
                    {props.discount}
                </label>
                <Restaurant data={props.data}/>
            </div>
        )
    }
}

export default Restaurant;