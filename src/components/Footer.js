import React from "react";
import styled from "styled-components";
import logoImg from "../images/rp1.png";
import footbgn from "../images/pu.jpg";

const TradeMark = styled.footer`
background: url(${footbgn});
width: 100%;
positive: relative;
margin-top: -100px;
height: 90px;
padding: 30px;
display: flex;
justify-content: space-around;
clear: both;
margin-bottom:0;


& small {
    color: white;
    font-size: 1rem;
    letter-spacing: 2px;
}
& .footlogo {
    width: 12rem;
    border: 2px solid white;
    cursor: pointer;
  
}
@media (min-width: 320px) and (max-width: 480px) {
    footer {
        padding: 5px;
    }

    small {
        color: white;
        font-size: 0.4rem;
        letter-spacing: 0;
    }

    .footlogo {
        width: 6rem;
        border: 1px solid white;
    }
}


@media (min-width: 1025px) and (max-width: 1280px) {
    .footlogo {
        width: 18rem;
        border: 2px solid white;
    }
    small {
        color: white;
        font-size: 1rem;
        letter-spacing: 2px;
    }

}

@media (min-width: 1281px) {
    .footlogo {
        width: 18rem;
        border: 2px solid white;
    }
    small {
        color: white;
        font-size: 1.2rem;
        letter-spacing: 3px;
    }
}
`
const Footer = () => (
    <div className="foot">
        <TradeMark>
            <small>&copy;2018 <b>Randy Prempeh</b>. All Rights Reserved</small>
            <div>
                <img className="footlogo" src={logoImg} alt="logo" />
            </div>
        </TradeMark>

    </div>
)

export default Footer;
