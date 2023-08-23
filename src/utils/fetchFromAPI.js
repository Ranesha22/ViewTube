import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '23c8e60a8emsh6e856fa64dc4944p1ee6c8jsn389c11f2f994',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


export const fetchfromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}  
  