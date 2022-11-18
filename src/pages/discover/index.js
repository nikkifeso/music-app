import React from "react";
import {Container} from './style'
import ControlBar from '../../components/ControlBar';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import SongLists from '../../components/SongLists';

const Discover =()=>{
    return (
        <>
            <Container>
               <SideBar className="left"/> 
               <div className="right">
                   <Header/>
                   <SongLists/>
                   <ControlBar/>
               </div>
            </Container>
        </>
    )
}

export default Discover;