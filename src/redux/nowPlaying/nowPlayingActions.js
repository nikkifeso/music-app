import { NOWPLAYING_SUCCESSFUL } from "./nowPlayingActionType"


const nowPlayingSuccess = (payload)=>{
    return{
        type: NOWPLAYING_SUCCESSFUL,
        payload
    }
}
export const currentlyPlaying = (song)=> async(dispatch)=>{
    if(song){
        dispatch(nowPlayingSuccess(song));
    }

}