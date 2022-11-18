import {GENRES_START, 
    GENRES_SUCCESSFUL, 
    GENRES_FAILED,
    GENRES_END } from "./genresTypes";
import { getMusic } from "../../api/music";


export const genresAction =()=>async(dispatch)=>{
    
    dispatch({type: GENRES_START})
    
    try{
        const {data, error}= await getMusic();
        console.log("action", data)
        dispatch({
            type: GENRES_SUCCESSFUL,
            payload: data[2]
        })
        dispatch({
            type: GENRES_END,
        })
    }
    catch (err){
        console.log(err);
        dispatch({
            type: GENRES_FAILED,
            payload: err.response.data.errors.errors
        })
        dispatch({
            type: GENRES_END,
        })
    }
    
}