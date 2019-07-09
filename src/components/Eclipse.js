import React from "react";
import styled, {keyframes} from "styled-components";
import EllImg from "../images/bb.png";
import Spin from "../components/Spin";


const Coorde = styled.p`
font-size: 0.8rem;
display: inline-block;
float: left; 
position: relative;
top: 15%;
letter-spacing: .4rem;
left: -12.5rem;
margin: 25rem 0;
transform: rotate(-90deg) translateY(50%);

 @media (min-width: 320px) and (max-width: 480px) { 
   font-size: 0.6em;
   transform: unset;
   left:10%;
   bottom: 12%;
   letter-spacing: 0.2rem;
   margin: 0;
   }
`

const EllipseContainer = styled.div`
width: 50rem;
height: 50rem;
border-radius: 50%;
margin: 0 auto;
position: relative;

@media (min-width: 320px) and (max-width: 480px) { 
     width: 15rem;
     height: 15rem;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 30rem;
        height: 30rem;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        width: 33rem;
        height: 33rem;
    } 
    
@media (min-width: 1025px) and (max-width: 1280px) {
    width: 42rem;
    height: 42rem;
    margin: 50px auto;
}
@media (min-width: 1281px) {
margin: 50px auto;
}
`



const Greeting  = styled.h2`
    position: absolute;
    top: 14rem;
    text-align: center;
    right: 0;
    margin: 0 auto;
    text-transform: uppercase;
    letter-spacing: 2rem;
    font-size: 8rem;
    font-weight: 400;
    opacity: .5;

    &::after{
        content:"";
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        display: inline-block;
        background-color: #8C383E;
        position: relative;
        top: -0.65rem;
        left: -5.05rem
    }

    @media (min-width: 320px) and (max-width: 480px) { 
    font-size: 2rem;
    top: 5rem;
    left: 3%;
    letter-spacing: 0.4rem;
       }

     @media (min-width: 481px) and (max-width: 767px) {
        font-size: 5rem;
        top: 10rem;
        left: 3%;
        letter-spacing: 0.4rem;
     }

    @media (min-width: 768px) and (max-width: 1024px){
    font-size: 4rem;
    top: 10rem;
    left: 3%;
    letter-spacing: 0.6rem;
} 

@media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 4rem;
    top: 14rem;
    left: 5%;
    letter-spacing: 0.9rem;
}
`
const EllipseOrbit = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);

}
`
const OuterThin = styled.div`
border-radius: 50%;
position: absolute;
top: 0;
border-style: solid;
width: 100%;
height: 100%;
border-width: 1px;
border-color:white;
animation: ${EllipseOrbit} 15s ease-in-out infinite;

&::after {
    content:" "; 
    background-image: url(${EllImg});
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position:center;
    top: 0; 
    left: 0;
    bottom: 0;
    right: 0; 
    color: #000;
    position: absolute;
    opacity: 0.2;
}
@media (min-width: 320px) and (max-width: 480px) { 
  top: 15%;
  background-size: 40% 40%;

}
` 

const EllipseOrb  = styled.div`
border-radius: 50%;
position: absolute;
top: 0;
border-style: solid;
 width: 2.5rem;
 height: 2.5rem;
 border-color: #ff0;
 background: linear-gradient(#ff0, #3cfdd3);
 border-width: 2px;
 top: 5rem;
 right: 6.75rem; 

   &::before {
    content: "";
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    display: inline-block;
    border-color: #00f;
    margin: 0 auto;
    left: 0;
    right: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}  

@media (min-width: 320px) and (max-width: 480px) { 
    width: 1.2rem;
    height: 1.2rem;
    top: 1.2rem;
   }

@media (min-width: 481px) and (max-width: 767px) {
    width: 2.1rem;
    height: 2.1rem;
    
}
@media (min-width: 768px) and (max-width: 1024px){
    width: 2.2rem;
    height: 2.2rem;
}
@media (min-width: 1025px) and (max-width: 1280px) {
top: 3rem;
}

`

const ElllipseRotate = keyframes`
0% {
    transform: rotate(-45deg);
}
100% {
    transform: rotate(-405deg);

}
` 
const OuterThick  = styled.div`
border-radius: 50%;
position: absolute;
top: 0;
border-style: solid;
width: 99.5%;
height: 99.5%;
border-color: #161616 transparent;
border-width: 1px;
transform: rotate(-45deg);
animation: ${ElllipseRotate} 15s ease-in-out infinite;

@media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
    top: 1rem;
}
`





const Eclipse  = () => (
    <div>
        <Coorde>Journey from Marketing  ==> Coding </Coorde>
        <EllipseContainer>
          <Greeting> 
            Timeline  <br/>skills
          <Spin />
          </Greeting>
          
          <OuterThin>
             <EllipseOrb> </EllipseOrb>  
          </OuterThin>
          <OuterThick />
        </EllipseContainer> 
        
    </div>
)




export default Eclipse;