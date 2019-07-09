import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HeaderWrapper from '../../components/Header';
import Footnote from '../../components/Footnote'
import { Link } from "react-router-dom";
import Overview, { BigA } from "../../components/overview";
import Button from "../../components/Button";
import ReallySmoothScroll from "really-smooth-scroll";
import FirstQuote from "../../components/Quotes";



ReallySmoothScroll.shim();

export const Homepage = props => (
    <div className="Home-body">
        <HeaderWrapper >
            <Footnote />
        </HeaderWrapper >
        <FirstQuote>
            <div className="quote">
                “The only limit to our realization of tomorrow will be our doubts of today.”
          <br /><span> – Franklin D. Roosevelt </span>
            </div>
        </FirstQuote>
        <Overview className="main">
            <BigA className="big-circle" viewBox="0 0 20 20" >
              <path  d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,
              10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"/> </BigA>
            <section id="str" className="motive">
                <sup>T</sup> here comes a time in man`s life where he ought to take a leap of faith into greatness.
                Programming has changed the way I used to see things or embraced them. Web Development now gives me the opportunity to
                create platforms for solving solutions that earlier could have been impossible to even come up with. I went from bridging gaps between wants and satisfaction on
                marketing milieu into web programming world.
                </section>
            <div className="btn">
                <Link to="/about" >
                <Button>About</Button> 
                </Link>
                <Link to="/contact">
                <Button primary>Contact</Button>
                </Link>
            </div>
            
        </Overview>
    </div>
)


