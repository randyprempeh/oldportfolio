import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import styled from "styled-components";

const Linkedin = styled.svg`
width: 18px;
height: 20px;
margin-left: 10px;
cursor: pointer;
`

const Twitter = styled.svg`
width: 18px;
height: 20px;
margin-left: 10px;
cursor: pointer;
`

const Faceboook = styled.svg`
width: 18px;
height: 20px;
margin-left: 10px;
cursor: pointer;
`
const Insta = styled.svg `
width: 18px;
height: 20px;
margin-left: 10px;
cursor: pointer;
`

 const Xing = styled.svg`
 width: 18px;
 height: 20px;
 margin-left: 10px;
 cursor: pointer;
`




 class Social extends React.Component {
  render() {
    return (
      <div className="social-media">
      <ButtonToolbar>
        <ButtonGroup vertical>
        <small style={{color:"white", fontWeight:"bolder"}}>Follow me</small>
          <Button className="sm-class" style={{backgroundColor:"blue"}}>
          {/* eslint-disable-next-line to the line before. */}
           <a target="_blank" href="https://www.facebook.com/randy.prempeh.1">
          <Faceboook viewBox="0 0 528 992">
            <path d="M342 64l6 1h83v96h-83q-7 0-13.5 1t-10.5 3.5-7.5 5.5-6
            6-4 6.5-2 6l-1 5-.5 3.5v154h162l-23 
            96H303v480h-96V448H79v-96h128V203q0-31 8-55.5t21.5-38.5T264
            85t31-14 27-5.5 20-1.5zm89 1zM342 0q-62 0-111 30-88 53-88 
            173v85H79q-26 0-45 19t-19 45v96q0 26 19 45t45 19h64v415q0 
            27 18.5 45.5T207 991h96q26 0 45-18.5t19-45.5V512h75q22 0
            39-13t23-33l22-96q9-31-10-56.5T465 288h-98v-63h64q26 0 
            45-19t19-45V65q0-27-18.5-45.5T432 1h-82q-4-1-8-1z" fill="white"/>
            </Faceboook>
           </a>
          </Button>
          {/* eslint-disable-next-line to the line before. */}
          <Button className="sm-class" style={{backgroundColor:"#ff0033"}}>
          <a target="_blank" href="https://www.instagram.com/rp_codes/">
            <Insta viewBox="0 0 1024 1024">  
            <path d="M511 4q128 0 209 3 69 3 123 24 52 20 90 58t58 90q21 54
            24 123 3 81 3 209t-3 209q-3 69-24 123-20 52-58 90t-90 58q-54 21-123 
            24-81 3-209 3t-209-3q-69-3-123-24-52-20-90-58t-58-90Q10 
            789 7 720q-3-81-3-209t3-209q3-69 24-123 20-52 58-90t90-58q54-21 
            123-24 81-3 209-3zm0 66q-133 0-217 3-54 2-100 19-72 30-102 102-17 
            46-19 100-3 84-3 217t3 217q2 54 19 100 30 72 102 102 46 17 100 19 84
            3 217 3t217-3q54-2 100-19 72-30 102-102 17-46 
            19-100 3-84 3-217t-3-217q-2-54-19-100-30-72-102-102-46-17-100-19-84-3-217-3zm0 
            644q84 0 143.5-59.5T714 511t-59.5-143.5T511 308t-143.5 59.5T308 511t59.5
              143.5T511 714zm0-463q108 0 184 76t76 184-76 184-184 76-184-76-76-184 76
              -184 184-76zm332-10q0 25-18 42.5T781 301q-25 0-42.5-17.5T721 241q0-26 
              17.5-44t42.5-18 43.5 18.5T843 241z" fill="white"/>
            </Insta>
          </a>
          {/* eslint-disable-next-line to the line before. */}
         </Button>
          <Button className="sm-class" style={{backgroundColor:"#4fc3f7"}}>
           <a target="_blank" href="https://twitter.com/oliverschlege">
            
           <Twitter  viewBox="0 0 1600 1280">
           <path d="M1588 152q-67 98-162 167 1 14 1 42 0 130-38 259.5T1273.5 869 1089 1079.5t-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 
           0 401-138-105-2-188-64.5T189 777q33 5 61 5 43 0 85-11-112-23-185.5-111.5T76 454v-4q68 38 146 41-66-44-105-115T78 222q0-88 44-163 
           121 149 294.5 238.5T788 397q-8-38-8-74 0-134 94.5-228.5T1103 0q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="white"/>

               </Twitter>
               {/* eslint-disable-next-line to the line before. */}
               </a>
          </Button>
          <Button className="sm-class" style={{backgroundColor:"#01579b"}}>
          <a target="_blank" href="https://www.linkedin.com/in/randy-prempeh-aa525939/">

          <Linkedin viewBox="0 0 24 24">
                <path d="M21 21h-4v-6.75c0-1.059-1.188-1.944-2.246-1.944-1.06 0-1.754.885-1.754 1.944V21H9V9h4v2c.662-1.071 2.356-1.763 3.525-1.763C18.997 9.237
                 21 11.28 21 13.75V21zM7 21H3V9h4v12zM5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="white"/>
                 {/* eslint-disable-next-line to the line before. */}
                </Linkedin>
            </a>
          </Button>
          <Button className="sm-class"  style={{backgroundColor:"#c0ca33"}}>
          <a target="_blank" href="https://www.xing.com/profile/RANDY_Prempeh/cv?sc_o=mxb_p">
          <Xing viewBox="0 0 24 24">
            <path  d="M17.666 2.002c-.43 0-.615.268-.771.547 0 0-6.216 11.02-6.416 11.382l4.096
            7.519c.141.259.366.553.806.553h2.88c.177 0 .308-.07.381-.187.08-.122.08-.287-.005-.448L14.57 
            13.92l6.387-11.293c.083-.157.083-.323.01-.446-.073-.117-.21-.18-.386-.18M5.551 5.949c-.175 0-.321.063-.395.184-.077.123-.063.28.02.44l1.948 3.394-3.066 5.405a.464.464
              0 0 0 0 .444c.073.123.205.2.376.2h2.885c.435 0 .64-.293.786-.561l3.116-5.503L9.24 6.49c-.143-.254-.362-.542-.807-.542" 
              fill="white"/>
           </Xing>
         </a>
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      </div>
    );
  }
}

export default Social;