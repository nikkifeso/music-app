import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

console.log(`${baseUrl}/album/302127`)
const releases =  axios.get(`${baseUrl}/chart/new-releases/`);
const featured =  axios.get(`${baseUrl}/chart/featured-playlists/`);
const categories =  axios.get(` https://cors-anywhere.herokuapp.com/api.deezer.com/api/chart/chart/categories/`);


export const getMusic =async(headers = null)=>{

    try{
        const responses = await Promise.allSettled([releases,featured,categories]).then((result)=> {
        const res =result.map((data)=> data.value)
        return res
        })
    console.log(responses);

    return{
        data: "responses",
        error:null
    }
}catch (error){
    return{
        data: null,
        error: error
    }
}
} 

