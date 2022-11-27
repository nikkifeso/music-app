import styled from 'styled-components';

export const ContainerDiv = styled.div `
    background-color: #574fd8;
    border-radius: 10px 0 0 10px;
    padding-top: 20px;

`
export const AvatarImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;     
    .username{
        margin-top: 120px;
        margin-bottom: 20px;
    } 
    svg {
        position: absolute;
        width: 60px;
        height: 100px;
        margin-top: 25px;      
    }
    span{   
        color: #ffffff;
        font-size: 0.75em;
    }
    @media (max-width: 480px){
        .username{
            margin-top: 60px;
        } 
        span{
            display: none;   
        }
        svg{
            width: 20px;
            height: 50px;
        }
    }
`
export const IconDiv = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 25px;
    padding-right: 25px;
    color: #aba7ec;
    font-size: 17px;
    span{  
        margin-left: 15px; 

    };
    &:hover{
        background-image: linear-gradient(to right, #7671DC, #574FD8);
        color: #ffffff;
    }  
    @media (max-width: 480px) {
    span{
            display: none;
        }
    }  
`