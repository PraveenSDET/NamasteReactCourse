import { useState } from "react"
import { restaurantList } from "../config"
import { RestaurantCard } from "./RestaurantCard"

const BodyComponent = () => {
    const [searchInput, setSearchInput] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    function filterRestaurantsBasedOnSearch(searchInput, restaurants) {
        return restaurants.filter((restaurant)=> restaurant.data.name.includes(searchInput))
    }

    return (
    <>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search for restaurant" 
        value={searchInput} 
        onChange={ (e) => {
            setSearchInput(e.target.value)
        }}
        />
        <h1>{searchInput}</h1>
        <button className="search-button"
         onClick={
            () => {
                setRestaurants(filterRestaurantsBasedOnSearch(searchInput, restaurants))
            }
         }
        >Search</button>
    </div>
    <div className="restaurant-list">
      {
        restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data}/>
          )
        })
      }
    </div>
    </>
)
}

export default BodyComponent