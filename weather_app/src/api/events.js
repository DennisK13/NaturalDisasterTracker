// https://eonet.sci.gsfc.nasa.gov/api/v3/events
// https://eonet.sci.gsfc.nasa.gov/api/v3/categories
import axios from "axios";

export function getEvents(url) {

 const promise = axios.get(url)

 const dataPromise = promise.then((response) => response.data)

 return dataPromise
}


export function getCategories(){

}
