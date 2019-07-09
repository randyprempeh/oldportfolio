import React from "react";
import styled from "styled-components";
import Social from "./Social";
import Header from "./Header";
import FirstQuote from "./Quotes";
import Image from '../images/cn.jpeg';

const NewHeader = styled(Header)`
background-image: url(${Image});

@media (min-width: 320px) and (max-width: 480px) {
    background-position: right;

}
`

const Feeds = styled.div`
width: 100%;
height: 100%
display: flex;
flex-direction: column;
padding: 3rem 6rem;

& h2 {
    font-size: 15rem;
    font-weight: 800;
    margin: 14px 50px;
    color: black;

    & span {
        color: #cd5ebd;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        background: rgba(0,0,0,.6);
        padding: 1rem;
           } 
    }

& p {
    font-size: 2.2rem;
    color: black;
    background: rgba(255,255,255,.6);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    padding: 2rem;
    margin-top: 100px ;    
    line-height: 1.5;
    letter-spacing: 2px;
}

@media (min-width: 320px) and (max-width: 480px) { 
  padding: 10px 30px;

 h2 {
    font-size: 4rem;
    color: #363636;
    }   
 span {
    font-size: 4rem;
    }
 p {
    font-size: 16px;
    margin: 29px;
    width: 250px;
    text-shadow: 2px 2px 15px #fff;
   }
}
@media (min-width: 481px) and (max-width: 767px) {

    h2 {
        font-size: 7rem;
    }   
    span {
        font-size: 7rem;
    }

    p {
        font-size: 19px;
        position: absolute;
        z-index: 2;
         bottom: 2%;
        width: 620px;
        padding: 0.4rem 2rem;
        margin: 20px;
        color: #000;
        font-weight: bold;
        text-shadow: 2px 2px 15px #161616;
        background:  rgba(255, 255, 255, 0.5);
    }
}
@media (min-width: 768px) and (max-width: 1024px) {
      padding: 1rem 1.2rem;
      h2{
          font-size: 11rem;
        }
      p {
        font-size: 21px;
        padding-top: 3rem;
       }

}

@media (min-width: 1025px) and (max-width: 1280px) {
     padding: 6rem 8rem;
  
}
`

const ConIntro = () => (
    <div>
        <NewHeader>
            <Social />
            <Feeds>
                <h2>Get in <span>Touch</span></h2>
                <p>Lets get into the future. I would love to expand my curiosity, hire me, readily available for
                   open offers or just say hello and I would hit you right back.
                </p>
            </Feeds>
        </NewHeader>
        <FirstQuote>
            <div className="quote">
                “Any opportunity to adorn oneself is human, and accessories are an easy way to do it.”
                <br />    <span> - Marc Jacobs</span>
            </div>
        </FirstQuote>

    </div>

)



export default ConIntro;