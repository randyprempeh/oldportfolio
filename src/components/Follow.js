import styled from "styled-components";


const Follow = styled.section` 
background: rgba(0,0,0,.4);
width: 90%;
display: flex;
margin: 0 auto;
margin-bottom: 100px;
  & h4 {
      font-size: 1.8rem;
      color: gray;
      letter-spacing: 1.5rem;
      font-weight: 500;
      }

  & button {
      opacity: 0.4;
      font-size: 1.2rem;
      text-transform: uppercase;
       padding: .8rem;
      border: 1px solid gray;
      width: 100px;
      background: none;    
  }
  & button:hover {
          box-shadow: 3px 5px 20px gray;
          opacity: 1.5;
        }
  & a {
      color: white;
      text-decoration: none;
      }
  
  @media (min-width: 320px) and (max-width: 480px) { 
      display: flex;
      justify-content: space-around;

      h4 {
      font-size: 0.6rem;
      letter-spacing: 1px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      }

      button {
      font-size: 0.5rem;
      width: 60px;
      padding: 1px;
      border: 1px solid white;
      }
   }

  @media (min-width: 481px) and (max-width: 767px) {
         justify-content: space-between;
     
      h4 {
          font-size: 1.2rem;
          letter-spacing: 5px;
          ont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
         }
      button {
        font-size: 0.9rem;
        width: 70px;
        padding: 2px;
        } 
    }     

  @media (min-width: 768px) and (max-width: 1024px){
          justify-content: space-between;
          margin-top: 6rem;
     
      h4 {
          font-size: 1.2rem;
          letter-spacing: 7px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
         }

      button {
          font-size: 1.2rem;
          width: 80px;
          padding: 4px;
         }
     }


  @media (min-width: 1025px) and (max-width: 1280px) {
         justify-content: space-between;
         width: 70%;
       
 
      h4 {
          font-size: 1rem;
          letter-spacing: 9px;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

       button {
          font-size: 1rem;
          width: 90px;
          padding: 0.4rem;
        }
    }

 @media (min-width: 1281px) {
        width: 50%;
        justify-content: space-between;
 
       h4 {
          letter-spacing: 9px;
          }
}
`



export default Follow;

