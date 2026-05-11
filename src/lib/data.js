
import data from '../../public/allData.json'

export const allTiles = async() => {
    // const res = await fetch("/allData.json");
    // const data = await res.json();
    return data;
}