import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 5px;
    height: 100vh;

    .left{
        flex-basis: 15%;
        
    }
    .right{
        flex-basis: 85% ;
        height: 100%;
       

    }
    @media (max-width: 480px){
        padding: 2px;
    }
`