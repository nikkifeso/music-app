import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
    color: #cecedc;
    height: 10%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0 0 10px 0;

    position: fixed;
    bottom: 0;
    /* width: 83%; */

    .item, .playback{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    } 
    
    img{
        border-radius: 10px;
        width: 50px;
        height: 50px;
    }
    hr{
        border: 0;
        height: 5px;
        width: 60%;
        background: #cecedc;
    }

    svg{
        font-size:10px;
        margin: 0 10px 0 10px ;
    }
    
    span{
        text-align: center;
        margin: 0 20px 0 20px ;
        color: black;
        font-weight: bold;
    }
    
    audio{
        width: 70%;
        position: fixed;
        bottom: 5;
    }
    audio::-webkit-media-controls-play-button{
        background-color: #574fd8;
        border-radius: 50% ;
    }
    
    audio::-webkit-media-controls-panel {
        background-color: rgba(255, 255, 255, 2.0);
  
     }

     @media (max-width: 480px){
        span, img{
            display: none;   
        }
        svg{
            width: 20px;
            height: 50px;
        }
    }
`