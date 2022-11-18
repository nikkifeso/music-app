import React from 'react';
import {ContainerDiv, AvatarImg, IconDiv} from './style'; 
import {FaHeadphonesAlt, FaSearch, FaHeart, FaPlayCircle, FaStream} from 'react-icons/fa';
import { ReactComponent as Avatar } from '../../assets/images/avatar.svg'


const SideBar =()=>{
    let iconStyles = {};
    return(
        <ContainerDiv>
            <AvatarImg>
                <Avatar/>
                <div className='username'>
                    <span>Bob Smith</span>
                </div>
                
            </AvatarImg>
            <IconDiv>
                <FaHeadphonesAlt/>
                <span>Discover</span>
            </IconDiv>
            <IconDiv>
                <FaSearch/>
                <span>Search</span>
            </IconDiv>
            <IconDiv>
                <FaHeart/>
                <span>Favourites</span>
            </IconDiv>
            <IconDiv>
                <FaPlayCircle/>
                <span>Playlists</span>
            </IconDiv>
            <IconDiv>
                <FaStream style={iconStyles}/>
                <span>Charts</span>
            </IconDiv>
        </ContainerDiv>
    )
}

export default SideBar