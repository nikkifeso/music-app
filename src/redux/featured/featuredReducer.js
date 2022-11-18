import {FEATURED_START, 
    FEATURED_SUCCESSFUL, 
    FEATURED_FAILED,
    FEATURED_END } from "./featuredTypes";

const initialState = {
featuredLoading: false,
featuredData: {},
featuredError: "",
featuredSuccess: false
}

export const featuredReducer =(state=initialState, action)=>{
switch(action.type){
    case FEATURED_START:
        return{
            ...state,
            featuredLoading: true,
            featuredSuccess: false
        }
    case FEATURED_SUCCESSFUL:
        return{
            ...state,
            featuredLoading: false,
            featuredError: "",
            featuredData: {...action.payload},
            featuredSuccess: true,
        }
    case FEATURED_FAILED:
        return{
            ...state,
            featuredLoading: false,
            featuredData: {},
            featuredError: action.payload,
            featuredSuccess: false
        }
    case FEATURED_END:
        return{
            ...state,
            featuredLoading: false,
        }
    default:
        return state;
}
}
