import { useParams } from "react-router-dom";
import { restaurantmenu } from "../utils/constants";
import { useEffect, useState } from "react";
import MenuSection from "./MenuSection";

const RestaurantMenu = () => {

    const [menuItems, setMenuItems] = useState([]);
    const { resID } = useParams();

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    const fetchRestaurantData = async () => {
        const data = await fetch(restaurantmenu + resID);
        const structuredData = await data.json();

        console.log(structuredData.data.cards);
        setMenuItems(structuredData?.data?.cards)
    }

    if (menuItems.length == 0) {
        return (<div></div>)
    }

    const { name, cuisines, totalRatings, costForTwoMessage, totalRatingsString } = menuItems[0].card.card.info
    let { cards } = menuItems[2].groupedCard.cardGroupMap.REGULAR

    let card = cards.filter((val, index) => {
        if (index !== 0 && index !== 1 && index !== cards.length - 1 && index !== cards.length - 2) {
            return true;
        }
        return false;
    });


    return (
        <div className="menu">
            <div className="restHeading">
                <h1>{name}</h1>
                <h3>{cuisines.join(',')}</h3>
                <h6>{costForTwoMessage}</h6>
                <h6>{totalRatingsString}</h6>
                <h6>{totalRatings}</h6>
            </div>

            <div className="restDetails">

            </div>

            <div className="resMenu">
                {
                    card.map((val) => {
                        const {title,itemCards}=val.card.card;
                        return <MenuSection title={title} itemCards={itemCards} />
                    })
                }
            </div>
            {/* <h1>Name of the Restaurant</h1>
        <h1>Menu</h1>

        <ul>
            <li>Biryani</li>
            
        </ul> */}

        </div>
    )
}

export default RestaurantMenu;