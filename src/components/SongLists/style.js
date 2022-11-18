import styled from 'styled-components';

export const ListContainer = styled.div`
    color: #d2d2df;
    
    div{
        display: flex; 
        justify-content: center;  
        margin: 15px;
    }
    h5{
        font-weight: bold;
        margin-top: -1px;
    }
    hr{
        border: 0;
        height: 1px;
        width: 80%;
        background: #d2d2df;
    }
    svg{
        color: #5850d8;
        font-size: 20px;
        margin-top: -1px
    }
    @media (max-width: 359px){
        hr{
            width: 10%;
            
        } 
        h5{
            font-size: 10px;
        }
    }
    @media (min-width: 360px) and (max-width: 768px){
        hr{
            width: 60%;
         }
    } 
`
export const Container = styled.div`
    overflow: scroll;
    position: relative;
    height: 70%;
`
export const DivStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
`