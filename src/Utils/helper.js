export function filterData(serachtext, restaurant) {
    const filterdata = restaurant.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(serachtext.toLowerCase())
    );
    return filterdata;
  }