import React from "react";
import styled from "styled-components";

const Front = styled.div`
width: 45%;
height: 30rem;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  opacity: 0.5;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
     box-shadow: 2px 5px 10px 20px black; 
     opacity: 1.5;
  }
& h2 {
    font-size: 8rem;
    text-align: center;
    letter-spacing: 8px;
}
& p {
    font-size: 4rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 300;
    padding: 2rem;
    text-align: center;
}
    & span {
        color: yellow;
    }

    @media (min-width: 320px) and (max-width: 480px) { 
        height: 10rem;
        h2 {
         font-size: 1rem;
         letter-spacing: 1px;
        }
      
          p {
    font-size: 0.7rem;
    padding: 1rem;
          }
     }
@media (min-width: 481px) and (max-width: 767px) {
    height: 25rem;
    h2 {
        font-size: 2rem;
        letter-spacing: 2px;
       } 
       p {
        font-size: 1.5rem;
        padding: 1.5rem;
              }
}    

@media (min-width: 768px) and (max-width: 1024px) {
    height: 30rem;
    h2 {
        font-size: 4rem;
        letter-spacing: 3px;
       } 
       p {
        font-size: 2.5rem;
        padding: 1.5rem;
              }

}

@media (min-width: 1025px) and (max-width: 1280px) {
   height: 30rem;
    h2 {
        font-size: 4rem;
        letter-spacing: 5px;
       } 
       p {
        font-size: 3rem;
        padding: 1rem;
              }
}

@media (min-width: 1281px) {
    height: 30rem;
    h2 {
        font-size: 5rem;
        letter-spacing: 5px;
       } 
       p {
        font-size: 3rem;
        padding: 1.5rem;
              }

}
`
const Back = styled(Front)`
width: 45%;

& span {
    color: #3cfdd3;
}
`

const SkillWrapper = styled.div`
width: 100%;
height: 40rem;
display: flex;
justify-content: space-around;
margin: 10rem 0 1rem 0;
padding: 5rem 4rem;

@media (min-width: 320px) and (max-width: 480px) { 
   padding: 4rem 2rem;
   margin: 2rem 0 2rem 0;
   height: 15rem;
}

@media (min-width: 481px) and (max-width: 767px) {
padding: 20rem 2rem;
   margin: 5rem 0 0 0;
   height: 30rem;
      }

    @media (min-width: 768px) and (max-width: 1024px){
        padding: 1rem 1.5rem;
        margin: 3rem 0 3rem 0;
        height: 32rem;
    
    }

@media (min-width: 1025px) and (max-width: 1280px) {
    padding: 5rem 4rem;
    margin: 4rem 0 3rem 0;
    height: 40rem;
}

@media (min-width: 1281px) {
    padding: 3rem 4rem;
    margin: 22rem 0 5rem 0;
    height: 40rem;

}
`


export const Skills = () => (
    <SkillWrapper>
        <Front>
            <h2> <span>Front</span>end</h2>
            <p>HTML<span>-</span> CSS <span>-</span> JavaScript <span>-</span>  React.js <span>-</span> Bootstrap <span>-</span>    Jquery </p>
        </Front>
        <Back>
            <h2> <span>Back</span>end</h2>
            <p>Node.JS <span>-</span> Express.JS <span>-</span> MongoDB <span>-</span> Mongoose <span>-</span>   Socket.io </p>
        </Back>

    </SkillWrapper>
)


