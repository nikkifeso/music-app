import {RELEASED_START, 
    RELEASED_SUCCESSFUL, 
    RELEASED_FAILED,
    RELEASED_END } from "./releasedTypes";
import { getMusic } from "../../api/music";


export const releasedAction =()=>async(dispatch)=>{
    
    dispatch({type: RELEASED_START})
    
    try{
        // const res = await axios.get(baseUrl + "/new-releases/");
        const {data, error}= await getMusic();
        console.log("action", data)
        dispatch({
            type: RELEASED_SUCCESSFUL,
            payload: data[0]
        })
        dispatch({
            type: RELEASED_END,
        })
    }
    catch (err){
        // console.log(error.response.data)
        console.log(err);
        dispatch({
            type: RELEASED_FAILED,
            payload: err.response.data.errors.errors
        })
        dispatch({
            type: RELEASED_END,
        })
    }
    
}