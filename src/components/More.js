import React from "react";
import styled from "styled-components";
import resume from "../images/rp.engl.pdf";





const Information = styled.p`
font-size: 17px;
text-align: left;
letter-spacing: 2px;
line-height: 1.5;
padding: 2rem 4rem;
font-family: Open Sans,sans-serif;

@media (min-width: 320px) and (max-width: 480px) { 
  font-size: 10px;
  padding: 1rem 2rem;
  letter-spacing: 1px;
}

@media (min-width: 481px) and (max-width: 767px) {
  font-size: 10px;
  padding: 1.2rem 1.8rem;
}

@media (min-width: 768px) and (max-width: 1024px) {
  font-size: 20px;
  padding: 3.8rem 4rem;
}

@media (min-width: 1281px) {
  font-size: 25px;
  letter-spacing: 2px;
  line-height: 1.4;
  padding: 3rem 11rem;
}
`


const High = styled.h1`
font-size: 3em;
font-weight: bold;
text-align: center;

@media (min-width: 320px) and (max-width: 480px) { 
font-size: 1.3em;
}
@media (min-width: 481px) and (max-width: 767px) {
  font-size: 1.8em;
}
@media (min-width: 768px) and (max-width: 1024px) {
  font-size: 2.8em;
}
`


const SpanNote = styled.p`
text-align: center;
font-weight: 800;
font-size: 16px;

  @media (min-width: 320px) and (max-width: 480px) { 
  font-size: 6px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
 
    font-size: 20px,;
  }
`



export const More = () => (
  <div className="port-body">
    <High>About me</High>
    <Information>
      Probably now, you know my name and quite few information about me, let me get indepth on how I managed to squeeze through here.
      Many years ago when i was in Ghana which is where I was born, having gained my educational plight from primary till University.
      I had always been the business guy, since I studied Business in College, though i was a big fun of Art(painting) back then i thought would perhaps
      die out of hunger with that career since my imaginary drawings seem worthless in my eyes. <br />  <br />

      After studying Business Administration with Marketing major at Kwame Nkrumah University of Science and Technology, I did my voluntary service having previously
      worked at banks, manufacturing firms, I wanted something challenging which is why after that, I took the task as a sales executive
      with an airline Company till i moved to Germany.

      During my entire career, I have been conversant with technology like understanding softwares and user interfaces. I worked with one of world`s finest fashion
      Company, L´Oréal,<abbr title="L`Oréal Professionel"><strong>LP </strong></abbr> brand with the marketing team through which gave the privilege to meet CEO of L´Oréal Group of Companies. <br /> <br />

      But as time changed, so did my interests. I began to reminisce from the grains of my brain how I used windows MSDOS prompts to clean floopy disks, copy and make directories.
      This childhood reflection somehow got me into programming today, I dreamt and finally found my elixir, the relentlent zeal to make abstraction with codes and get real
      solutions to enhance the way of living. With marketing still in my blood, and combination of languages like JavaScript, Node.js and the like will make my balance for solving,
      satisfying my creativity to know no boundary. <br/> <br />

      I am still thrilled with web development and its future, One woud ask why the sudden swerve in career lanes? I´d say why dont you try
      <b><i> programming</i></b>.I am motivated, ambitious and hungry for more knowledge. Though it has been tough along the line, nothing ever stopped me which is why I'm confident
        that I would put my all in any given task assigned to. By the way I am not always coding but also cooking, music and keeping abreast with tech-savvy stuff.
   </Information>
    <SpanNote>Check Resume <a href={resume}>here</a></SpanNote>
  </div>
)
