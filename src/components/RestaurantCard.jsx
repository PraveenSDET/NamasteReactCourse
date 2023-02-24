import { IMAGE_CDN_URL } from "../config"

export const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId, deliveryTime}) => {
    return (
    <div className="restaurant">
      <img src={`${IMAGE_CDN_URL}${cloudinaryImageId}`}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4> <h4>{deliveryTime} mins for delivery</h4>
    </div>
    )
  }