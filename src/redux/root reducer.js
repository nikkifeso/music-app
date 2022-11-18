import { combineReducers } from "redux";
import { releasedReducer } from "./released/releasedReducer";
import { genresReducer } from "./genres/genresReducer";
import { featuredReducer } from "./featured/featuredReducer";
import { nowPlayingReducer } from "./nowPlaying/nowPlayingReducers";

export const rootReducer = combineReducers({releasedReducer, genresReducer, featuredReducer, nowPlayingReducer})