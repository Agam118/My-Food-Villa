export function Filter(searchInput , fullrestList)
{  
    // there is list of 7 restraunt it will return list containing  name as searchInput
    return fullrestList.filter((restaurant) => restaurant.data.name.includes(searchInput))
}   