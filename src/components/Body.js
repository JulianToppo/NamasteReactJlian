import Restaurant from "./RestaurantCard";
import resData from "../utils/mockData";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    console.log("body render")
    const [demoData, setDemoData] = useState([]);

    const [searchElem, setSearchElem] = useState("");

    const [filteredData, setFilteredData] = useState(demoData);

    useEffect(() => {
        console.log("use Effect for body called")
        fetchData();
        console.log("after fetch data")
        const set = setInterval(() => {
            console.log("setInterval called")
        }, 1000)

        return () => {
            clearInterval(set)
        }
    }, [])

    const fetchData = async () => {
        console.log("fetch data called")
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let structured = await data.json();

        setDemoData(structured?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants

        setFilteredData(structured?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log("data fetched");
    }

    const btnClickHandler = () => {
        let filterdata = demoData.filter((val) => {
            console.log(val.info.rating.rating_text > 4.0)
            return val.info.rating.rating_text > 4;
        })

        setDemoData(filterdata);
    }

    const onSearchHandler = () => {
        4
        let filteredDemoData = demoData.filter((val) => {
            return val.info.name.toUpperCase().includes(searchElem.toUpperCase());
        })

        setFilteredData(filteredDemoData)
    }

    return (

        <div className="body-container">
            <div className="server-container flex justify-around m-4">
                <div>
                    <input className="rounded-lg pr-2 bg-gray-200 hover:border-t-purple-500" type="text" value={searchElem} onChange={(e) => {
                        setSearchElem(e.target.value)
                    }}></input>

                    <button className="bg-orange-500 p-2 ml-2 text rounded-lg" onClick={onSearchHandler}>Search</button>
                </div>
                <div>
                    <button className="filter_btn bg-orange-500 p-2 rounded-lg " onClick={btnClickHandler}>Top Rated Restaurant</button>
                </div>


            </div>
            <div className="all-restaurant flex ml-10 mr-10 flex-wrap justify-center">
                {filteredData.map((val) => {
                    // console.log("val",val)
                    return <Link key={val.info.id} to={"/restaurant/" + val.info.id}><Restaurant data={val} />
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Body;