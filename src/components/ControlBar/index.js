import React from "react";
import {Container} from './style';
import {useSelector}  from 'react-redux';


const ControlBar=()=>{
    const {song}= useSelector(state=> state.nowPlayingReducer)
    console.log(song);
    return(
        <>
            <Container>
                <div className="item">
                    <img src={song?.artist?.picture} alt="art"/>
                    <span>{song?.title}</span>
                </div>
                <div className="playback">
                    <audio autoplay controls src={song?.preview} type="audio/mp3"></audio>
                </div>
                
            </Container>
        </>
    )
}

export default ControlBar