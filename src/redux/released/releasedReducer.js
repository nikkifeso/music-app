import {RELEASED_START, 
    RELEASED_SUCCESSFUL, 
    RELEASED_FAILED,
    RELEASED_END } from "./releasedTypes";

const initialState = {
releasedLoading: false,
releasedData: {},
releasedError: "",
releasedSuccess: false
}

export const releasedReducer =(state=initialState, action)=>{
switch(action.type){
    case RELEASED_START:
        return{
            ...state,
            releasedLoading: true,
            releasedSuccess: false
        }
    case RELEASED_SUCCESSFUL:
        return{
            ...state,
            releasedLoading: false,
            releasedError: "",
            releasedData: {...action.payload},
            releasedSuccess: true,
        }
    case RELEASED_FAILED:
        return{
            ...state,
            releasedLoading: false,
            releasedData: {},
            releasedError: action.payload,
            releasedSuccess: false
        }
    case RELEASED_END:
        return{
            ...state,
            releasedLoading: false,
        }
    default:
        return state;
}
}
