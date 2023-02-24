import { restaurantList } from "../config"
import { RestaurantCard } from "./RestaurantCard"

const BodyComponent = () => (
    <div className="restaurant-list">
      {
        restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data}/>
          )
        })
      }
    </div>
)

export default BodyComponent