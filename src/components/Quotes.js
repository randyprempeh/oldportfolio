import styled from "styled-components";


const FirstQuote = styled.div`
background: white;
opacity: 0.6; 
width: 100%;
height: 400px;
position: relative;
}

& .quote {
 &::before {
   content: "";
   clear: both;
   height: 200px;
   border-left: 8px solid #363600;
   position: absolute;
   z-index: 2;
   left: 25%;

   @media (min-width: 768px) and (max-width: 1024px) {
      left: 15%;
   }
@media (min-width: 1025px) and (max-width: 1280px) {
  left: 15%;
   
}
}
  font-size: 2em;
  height: 100%;
  width: 600px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin: 0 auto;
  padding: 5rem;
  font-style: italic;
 
}
& span {
  color: red;
  font-family: 'Satisfy', cursive;
  font-weight: 900;
}

@media (min-width: 320px) and (max-width: 480px) {
  
  .quote:before {
    padding: 1rem;
    left: 5%;
    height:220px;
  }

   .quote {
     width: 300px;
     font-size: 1.2em;
  
   }

   span {
     font-size: 0.9rem;
   }
  }

   @media (min-width: 481px) and (max-width: 767px) {
    .quote:before {
      padding: 2rem;
      left: 10%;
      height:220px;
    }
}

` 
export default FirstQuote;