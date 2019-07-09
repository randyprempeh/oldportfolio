
import styled from "styled-components";
import Image from '../images/ran.jpg';


const HeaderWrapper = styled.header`
background-image: url(${Image});
background-repeat: no-repeat;
background-position:  10% 90%;
background-size: cover;
width: 100%;
height: 100vh;

@media (min-width: 320px) and (max-width: 480px) {
    background-position: right;
    background-size: cover;
}

@media (min-width: 768px) and (max-width: 1024px) {
    background-position: 50%;

}
`


export default HeaderWrapper;