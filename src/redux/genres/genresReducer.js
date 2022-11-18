import {GENRES_START, 
    GENRES_SUCCESSFUL, 
    GENRES_FAILED,
    GENRES_END } from "./genresTypes";

const initialState = {
genresLoading: false,
genresData: {},
genresError: "",
genresSuccess: false
}

export const genresReducer =(state=initialState, action)=>{
switch(action.type){
    case GENRES_START:
        return{
            ...state,
            genresLoading: true,
            genresSuccess: false
        }
    case GENRES_SUCCESSFUL:
        return{
            ...state,
            genresLoading: false,
            genresError: "",
            genresData: {...action.payload},
            genresSuccess: true,
        }
    case GENRES_FAILED:
        return{
            ...state,
            genresLoading: false,
            genresData: {},
            genresError: action.payload,
            genresSuccess: false
        }
    case GENRES_END:
        return{
            ...state,
            genresLoading: false,
        }
    default:
        return state;
}
}
