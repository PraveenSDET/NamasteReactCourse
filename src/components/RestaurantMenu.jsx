import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {id} = useParams();
    const [restaurantMenu, setrestaurantMenu] = useState([]);

    useEffect(()=> {
        getRestaurantInfo()
    }, [])

    async function getRestaurantInfo() {
        const restaurantMenu_data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0420173&lng=76.97586969999999&restaurantId=${id}&submitAction=ENTER`)
        const restaurantMenu_json = await restaurantMenu_data.json()
        // console.log(restaurantMenu_json)
        console.log("Inside GET RESTAURANT USE EFFECT)")
        setrestaurantMenu(restaurantMenu_json.data.cards)
        // console.log(restaurantMenu)
    }

    console.log("After use effect")

    return (restaurantMenu.length === 0) ? (<Shimmer />) : (
        <>
        <div className="restaurant">
            {console.log(restaurantMenu)}
            <h1>{restaurantMenu[0].card.card.info.name}</h1>
            <img src={`${IMAGE_CDN_URL}${restaurantMenu[0].card.card.info.cloudinaryImageId}`}></img>
            <h3>{restaurantMenu[0].card.card.info.cuisines.join(", ")}</h3>
            <h4>{`${restaurantMenu[0].card.card.info.areaName}, ${restaurantMenu[0].card.card.info.sla.lastMileTravelString}`}</h4>
        </div>
        <div className="menu-list">
            <h1>Restaurant menu</h1>
            {
                (
                    Object.values(restaurantMenu[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards).map((item) => {
                        return (
                            <div className="menu">
                                <h2 key={item.card.info.id}>{item.card.info.name}</h2>
                                <img src={`${IMAGE_CDN_URL}${item.card.info.imageId}`}></img>
                                <h4>{item.card.info.description}</h4>
                            </div>
                        )
                    })
                )
            }

        </div>
        </>
    )
}

export default RestaurantMenu