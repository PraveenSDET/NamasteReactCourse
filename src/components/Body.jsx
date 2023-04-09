import { useEffect, useState } from "react"
import { restaurantList } from "../config"
import { RestaurantCard } from "./RestaurantCard"
import { filterRestaurantsBasedOnSearch } from "../utils/Helper"
import Shimmer from "./Shimmer"
import useOfflineSupport from "../utils/useOfflineSupport"

const BodyComponent = () => {
    const [searchInput, setSearchInput] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
        const restaurantData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0420173&lng=76.97586969999999&page_type=DESKTOP_WEB_LISTING")
        const restaurantData_Json = await restaurantData.json()
        console.log(restaurantData_Json)
        setAllRestaurants(restaurantData_Json.data.cards[2].data.data.cards)
        setFilteredRestaurants(restaurantData_Json.data.cards[2].data.data.cards)
    }

    const isOffline = useOfflineSupport()
    if (isOffline) {
      return <h1>☹︎Please check your internet connection!!!</h1>
    }

    // if (filteredRestaurants.length === 0) return <h1>Oops!! No restaurants found. Please search for something else!!</h1>
    return (allRestaurants.length === 0) ? 
    (
    <Shimmer /> 
    ) : (
    <>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search for restaurant" 
        value={searchInput} 
        onChange={ (e) => {
            setSearchInput(e.target.value)
        }}
        />
        <button className="search-button"
         onClick={
            () => {
                setFilteredRestaurants(filterRestaurantsBasedOnSearch(searchInput, allRestaurants))
            }
         }
        >Search</button>
    </div>
    <div className="restaurant-list">
      { 
        (filteredRestaurants.length === 0) ? 
        (
        <h1>Oops!! No restaurants found. Please search for something else!!</h1> 
        ) : 
        (     
        filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
          )
        })
        )
      }
    </div>
    </>
)
}

export default BodyComponent