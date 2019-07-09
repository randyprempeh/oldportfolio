import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from "styled-components";
import { Skills } from "../../components/Skills";
import Eclipse from "../../components/Eclipse";
import Follow from "../../components/Follow";
import { Link } from "react-router-dom";


/* import Thumbnail from "../../me.jpg"; */
const InWrap = styled.div`
width: 50%;
background: rgba(0,0,0,.4); 
margin-top: 3rem;

@media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
}
`

const Intro = styled.h2`
font-size: 5rem;
font-weight: 900;
text-align: center;
margin-bottom: 0.4rem;
letter-spacing: 10px;

& span {
    color: #cd5ebd;   
}

@media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.5rem;
}
@media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
}
`

// eslint-disable-next-line
const Bio = styled.p`
font-size: 1.4rem;
font-weight: 100;
line-height: 1.9;
letter-spacing: 1px;  
margin-top: 0; 
padding: 2rem;

& span {
color: #3cfdd3;
}

@media (min-width: 320px) and (max-width: 480px) {
     font-size: 0.9rem;
     padding: 1rem;
}

@media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.2rem;
    padding: 1.5rem 1rem;
}
 

@media (min-width: 1025px) and (max-width: 1280px) { 
        padding: 3rem 6rem;
}

@media (min-width: 1281px) {
    h2 {
        font-size: 7rem;
        padding-bottom: 40px;
    }
}
`



const About = props => (
    <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}>
        <div className="about-wrapper">
            <div className="display">
                <InWrap>
                    <Intro>How it <br/>  <span>started</span></Intro>
                    <Bio>
                        When I moved to Germany earlier with absolutely no glimmers of Hope, that was when an opportunity knocked.
                        But with the help of <span>Digital Career Institute. <a href="https://digitalcareerinstitute.org/en/" target="_blank" >(DCI),</a></span>
                        I had a career swing from a Marketer to becoming a developer having worked both Frontend and Backend.</Bio>
                </InWrap>

                <InWrap>
                <Intro>About <br/> <span>me</span></Intro>
                <Bio>
                    I'm Randy, I come from Ghana. Before I indulged into programming, was in Sales/Marketing
                    and even had the privilege to work with L´Oréal Deutschland.I find ways to inspire myself
                    through tasks. I am a people's person and always eager to learn  <span><Link to="/More">more.</Link> </span>
                </Bio>
                </InWrap>
            </div>
            <Eclipse />
            <Skills />
            <Follow>
                <h4>My recent works can be found here on</h4>
                <button >
                    <a className="git" href="https://github.com/randyprempeh" target="blank">Github</a>
                </button>
            </Follow>
        </div>
    </ReactCSSTransitionGroup>
)






export default About;