import React from 'react';
import { HeaderImg } from './style';
import { ReactComponent as Hero } from '../../assets/images/hero.svg';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header =()=>{
    return(      
        <>
            <HeaderImg>
                <Hero className='svg'/> 
                <div>                
                    <h1>Your favourite tunes</h1>
                    <span>All <FaSun  style={{fill:'#ffd50d'}} /> and all <FaMoon style={{fill: '#39383d'}} /></span>           
                </div>  
            </HeaderImg>
        </>
    )
}

export default Header;