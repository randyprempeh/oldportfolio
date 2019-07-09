import React, { Component } from "react";
import styled, { keyframes } from "styled-components";


const Intro = styled.p`
   text-align: left;
   color: white;
   padding-top: 1em;
   font-size: 7rem;
   margin: 100px 150px;
   font-family: 'Roboto', sans-serif;
   font-weight: 900;
   & span {
       color: #cd5ebd;
       font-family: 'Roboto', sans-serif;
       font-weight: 900;
      } 
`

const ForIntro = styled(Intro)`
font-size: 4rem;
font-weight: 100;
`

 
const Arrow = styled.svg`
width: 6rem;
opacity: 0.4;
position: absolute;
left: 50%;
transform: translate(-50%,-50%);  
margin-left: -30px;
top: 50rem; 
cursor: pointer;
padding:15px;
line-height: 110px;
text-align: center;
overflow: hidden;  
fill: transparent
stroke-width: 1px; 


 & .circle {
  color: white;
  margin: 0;
  padding: 0;
}  

@media (min-width: 481px) and (max-width: 767px) {
   .circle {
     display: none;
       }
}

@media (min-width: 768px) and (max-width: 1024px) {
top: 60rem;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  top: 70rem;
}
`   

const animate = keyframes`
  0% {
   transform: translateY(-50px);
  };
   20% {
    transform: translateY(0px);
  }
  40% {
    transform:translateY(0px);
  };
  60% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(100px);
  } 
` 

const PathStyle = {
  color: "white",
  margin: "0",
  padding: "0",
  animation: `${animate} 1s linear infinite`
  }
 



class Footnote extends Component {
  render() {
    return (
      <div className="foot-container">
        <Intro> Hi , I am <span> Randy,</span> <br/> a junior web developer.</Intro>
        <ForIntro >I build user experiences with passion</ForIntro>
        <Arrow className="first-svg" viewBox="0 0 20 20" >
              <path style={PathStyle} className="circle" d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,
              10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" fill="white"/>
        </Arrow>
      </div>
    );
  }
}


export default Footnote;
