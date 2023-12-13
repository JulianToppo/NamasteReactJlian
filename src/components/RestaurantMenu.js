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

    const { name, cuisines, avgRating, costForTwoMessage, totalRatingsString } = menuItems[0].card.card.info
    let { cards } = menuItems[2].groupedCard.cardGroupMap.REGULAR

    let card = cards.filter((val, index) => {
        if (index !== 0 && index !== 1 && index !== cards.length - 1 && index !== cards.length - 2) {
            return true;
        }
        return false;
    });


    return (
        <div className="menu">
            <div className="restHeading flex justify-between w-6/12 m-auto mt-2 mb-8 border-cyan-200">
                <div className="py-6">
                    <h1 className="text-xl font-semibold font-">{name}</h1>
                    <h3 className="font-light">{cuisines.join(', ')}</h3>
                    <h6 className="font-light">{costForTwoMessage}</h6>
                </div>

                <div className="flex flex-col justify-evenly p-4 border border-solid rounded-md">
                    <h6 className="text-green-800 font-extrabold">{'🌟'+avgRating}</h6>
                    <hr></hr>
                    <h6 className="text-xs font-light">{totalRatingsString}</h6>

                </div>

            </div>

            <div className="restDetails">

            </div>

            <div className="resMenu">
                {
                    card.map((val) => {
                        const { title, itemCards } = val.card.card;
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