import styled from "styled-components";
import ImgBg from "../../Images/food.jpg";

export const HeroContainer = styled.div`
  background-image: url(${ImgBg});
  background-size: 100% 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0, 7),
    rgba(0, 0, 0, 0, 1)
  );
  height: 100vh;
  background-position: 100% 100%;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh -80px);
  max-height: 80%;
  width: 100vw;
  margin-top: 20%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  background-attachment: fixed;
  font-family: "Bebas Neue", sans-serif;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    transition: 0.5s;
    line-height: 1;
    margin: 0 10px;
    -webkit-animation-delay: 0.8s;
    animation-direction: alternate;
    animation-delay: 0.8s;
    border: 2px solid #ffb03b;
    background: transparent;
    color: #fff;
    width: 30%;
    
    &:hover {
    background: #ffb03b;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    font-size: 18px;
    }
    a{
        color: #fff;
    }
    a:link{
        text-decoration: none;
    }
`;
