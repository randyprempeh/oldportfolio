import React from "react";
import styled, { keyframes } from "styled-components";

const spinIn = keyframes`
0% { content:"Html5";
 color: #ff0;}
5% { content:"Redux"; }
10% { content:"CSS3"; }
15% { content:"Regex"; }
20% { content:"Javascript"; }
25% { content:"Ajax"; }
30% { content:"SASS"; }
35% { content:"Npm"; }
40% { content:"React"; }
45% { content:"Ubuntu"; }
50% { content: "Node.js";
color: #3cfdd3; }
55% { content:"Api"; }
60% { content: "MongoDB"; }
65% { content:"Terminal"; }
70% { content: "Express"; }
75% { content:"Git/Github"; }
80% { content: "Pug"; }
85% { content:"Markdown"; }
90% { content: "Webpack"; }
95% { content:"HandleBar"; }
100% { content: "Socket.io"; }
}
`


const Haves = styled.p`
font-size: 6rem;
& #spin {
&::after {
    content:"";
    animation: ${spinIn} 30s linear infinite;
    }
color: red;
font-weight: 900;
}
@media (min-width: 320px) and (max-width: 480px) { 
font-size: 1rem;
   }
   @media (min-width: 481px) and (max-width: 767px) {
font-size: 2rem;
   }

   @media (min-width: 768px) and (max-width: 1024px){
    font-size: 3rem;
   }
@media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 3rem;
}
   }
`

const Spin = () => (
    <div>
        <Haves><span id="spin"></span> </Haves>
    </div>
)


export default Spin;
