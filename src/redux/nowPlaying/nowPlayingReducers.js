import { NOWPLAYING_SUCCESSFUL } from "./nowPlayingActionType";

const INITIAL_STATE = {
    song: null
}

export const nowPlayingReducer = (state= INITIAL_STATE, action)=>{
switch (action.type){
    case NOWPLAYING_SUCCESSFUL:
        return {
            ...state,
            song: action.payload
        }
        default:
            return state;
}
}