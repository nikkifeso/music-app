import {FEATURED_START, 
    FEATURED_SUCCESSFUL, 
    FEATURED_FAILED,
    FEATURED_END } from "./featuredTypes";
import { getMusic } from "../../api/music";


export const featuredAction =()=>async(dispatch)=>{
    
    dispatch({type: FEATURED_START})
    
    try{
        const {data, error}= await getMusic();
        console.log("action", data)
        dispatch({
            type: FEATURED_SUCCESSFUL,
            payload: data[1]
        })
        dispatch({
            type: FEATURED_END,
        })
    }
    catch (err){
        console.log(err);
        dispatch({
            type: FEATURED_FAILED,
            payload: err.response.data.errors.errors
        })
        dispatch({
            type: FEATURED_END,
        })
    }
    
}