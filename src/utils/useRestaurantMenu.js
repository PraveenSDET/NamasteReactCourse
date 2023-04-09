import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../config";

const useRestaurantMenu = (restaurantId) => {
    const [restaurantMenu, setrestaurantMenu] = useState([]);

    useEffect(()=> {
        getRestaurantInfo()
    }, [])

    async function getRestaurantInfo() {
        const restaurantMenu_data = await fetch(RESTAURANT_MENU_URL(restaurantId))
        const restaurantMenu_json = await restaurantMenu_data.json()
        // console.log(restaurantMenu_json)
        console.log("Inside GET RESTAURANT USE EFFECT)")
        setrestaurantMenu(restaurantMenu_json.data.cards)
        // console.log(restaurantMenu)
    }

    return restaurantMenu
}

export default useRestaurantMenu;