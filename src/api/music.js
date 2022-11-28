import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const releases =  axios.get(`${baseUrl}/playlists/`);
const featured =  axios.get(`${baseUrl}/chart/featured-playlists/`);
const categories =  axios.get(`${baseUrl}/chart/chart/categories/`);


export const getMusic = async()=>{
    try{
        const responses = await Promise.allSettled([releases,featured,categories]).then((result)=> {
            return result.map((data)=> data.value)
        })
        return{
            data: responses,
            error: null
        }
    }catch (error){
        return{
            data: null,
            error: error
        }
    }
} 

