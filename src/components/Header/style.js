import styled from 'styled-components';

export const HeaderImg = styled.div`
    display: flex;
    width: 100%;
    height: 180px;
    overflow: hidden;
    align-items: center;
    text-align: right;
    background-color: #ffb5a7;
    color: #ffffff;
    border-radius: 0 10px 0 0;

    svg{
        font-size: 30px;
    }
    .svg{
        width: 450px;
        height: 300px;
        transform: scaleX(-1);
        margin-right: auto;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 50px;
    }
    h1{
        font-size: 40px;
        font-weight: bold; 
    }
    span{
        font-size: 35px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    
    @media (max-width: 480px){
        height: 110px;
        text-align: left;

        div{
            margin: 25px;
        }
        h1{
            font-size: 25px;
            font-weight: bold; 
        }
        span{
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        svg{
            font-size: 15px;
        }
        .svg{
                display: none;
            }
    }
`
