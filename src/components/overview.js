import styled from "styled-components";
import Illusion from '../images/smoke.png';



export const BigA = styled.svg`
width: 80%;
left: 10%;
opacity: 0.2;
position: absolute;
top: 40%;

@media (min-width: 768px) and (max-width: 1024px){
top: 68%;
}
@media (min-width: 1025px) and (max-width: 1280px) {
    top: 60%;
       
}
`

const Overview = styled.section`
background-image: url(${Illusion});
background-repeat: no-repeat;
background-size: cover;
height: 100%;
margin-bottom: 100px;

 & .motive {
     width: 60%;  
     margin: 0 auto;
     height: 100%;
     font-size: 30px;
     padding: 3rem;
     background: rgba(0,0,0,.8);
     color: white;
     font-family: 'Montserrat', sans-serif;
     color: white;
     text-align: left;
     display:  flex;

     @media (min-width: 768px) and (max-width: 1024px){
     width: 100%;
     }
 }
 & sup {
     font-size: 8rem;
     position: relative;
     top: 40px;
     color: #cd5ebd;
 }
     @media (min-width: 320px) and (max-width: 480px) {
        .motive {
             width: 100%;
            padding: 1rem;
            font-size: 10px;
         }
         
         sup {
             font-size: 4rem;
             top: 20px;
         }
 }

 @media (min-width: 481px) and (max-width: 767px) {
    .motive {
        width: 85%;
       padding: 2rem;
       font-size: 17px;
    }

    sup {
        font-size: 6rem;
        top: 30px;
    }
    .big-circle {
        width: 100%;
        top: 53%;
       left: 5%;
    }
 }

@media (min-width: 1025px) and (max-width: 1280px) {
    .motive {
        width: 100%;
       padding: 7rem;
       font-size: 24px;
    }
}
@media (min-width: 1281px) {
    .big-circle {
        width: 50%;
        top: 50%;
        left: 25%;
        opacity: 0.1;
       }
}
`






export default Overview;
