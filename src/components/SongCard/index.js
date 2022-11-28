import React from "react";
import {Container} from "./style";
import { useDispatch}  from 'react-redux';

import { currentlyPlaying } from "../../redux/nowPlaying/nowPlayingActions";


const SongCard =({image,title,preview,song})=>{
    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(currentlyPlaying(song)) ; 
    }
    return(
           <Container onClick={()=>handleClick()}>
               <img src={image} alt=""/>
               <span>{title}</span>
           </Container> 
    )

}

export default SongCard;