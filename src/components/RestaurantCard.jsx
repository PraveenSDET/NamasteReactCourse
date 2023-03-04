import { Link } from "react-router-dom";
import { IMAGE_CDN_URL } from "../config"

export const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId, deliveryTime, area, id}) => {
    return (
    <div className="restaurant">
      <img src={`${IMAGE_CDN_URL}${cloudinaryImageId}`}></img>
      <Link to={`/restaurant/${id}`}><h2>{name}</h2></Link>
      <h5>{area}</h5>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4> <h4>{deliveryTime} mins for delivery</h4>
    </div>
    )
  }