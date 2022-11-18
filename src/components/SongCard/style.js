import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;

    img{
        border-radius: 10px;
        width: 100px;
        height: 100px;
    }

    span{
        text-align: center;
        padding-top: 10px;
        color: black;
        font-size: 12px;
        font-weight: bold;
    }

    @media (max-width: 480px){
        span{
            font-size: 10px;  
        }
        
    }
`