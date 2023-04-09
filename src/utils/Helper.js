export function filterRestaurantsBasedOnSearch(searchInput, restaurants) {
    const filteredRestaurants = restaurants.filter((restaurant)=> restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()))
    console.log(filteredRestaurants)
    return filteredRestaurants
}