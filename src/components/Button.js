import styled from "styled-components";


const Button = styled.button`
  background: ${props => props.primary ? "#cd5ebd" : "black"};
  color: ${props => props.primary ? "#000" : "#fff"};
  font-weight: 900;
  width: 50%;
  font-size: 24px;
  border-radius: 3px;
  letter-spacing: 10px;
  margin-top: 50px;
  position: relative;
  &:hover {
      pointer: cursor;
      zoom: 1;
      box-shadow:  ${props => props.primary ? "2px 20px 20px black" : "2px 20px 20px black"};
      } 
  @media (min-width: 320px) and (max-width: 480px) {
   button a {
    font-size: 12px;
  }
  }
`


export default Button;