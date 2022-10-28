import axios from "axios";

const URL_API = " http://localhost:3000/vuelos";

export const fligthsSearch = async (flight) => {
  let urlSearch = `${URL_API}?`;    
  for (const key in flight) {
    console.log(`${key}:${flight[key]}`);
    urlSearch = `${urlSearch}${key}=${flight[key]}&`;
  }
  console.log(urlSearch);
  try {
    const { data } = await axios.get(urlSearch);
    return data;
  } catch (error) {
    return [];
  }
};
