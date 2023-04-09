import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOfflineSupport from "../utils/useOfflineSupport"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {id} = useParams();
    
    const restaurantMenu = useRestaurantMenu(id);

    const isOffline = useOfflineSupport()

    if (isOffline) {
      return <h1>☹︎Please check your internet connection!!!</h1>
    }

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