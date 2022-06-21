import styled from "styled-components";
import SendBackground from "../images/sendmessagebackground.jpg";

export const LetterUserContainer = styled.main`
  width: 100%;
  height: 100%;
  background-image: url(${SendBackground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const LetterRecipient = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;

    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
      width: 115px;
      height: 115px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      width: 105px;
      height: 105px;
 
    }
  }

  h3 {
    text-transform: capitalize;
    font-size: 1.3rem;
    font-weight: 400;
    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
      font-size: 1.3rem;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      font-size: 1.2rem;
     
    }
  }
`;

export const LetterUserWrapper = styled.div`
  background: rgba(171, 162, 162, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 1rem 0 0 0;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
    width: 100%;
  }

  h2 {
    text-transform: uppercase;
    padding-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;


    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
      font-size: 1.3rem;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      font-size: 1.2rem;
    }
  }

  textarea {
    width: 380px;
    height: 210px;
    background: rgba(247, 183, 183, 0.45);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border-radius: 10px;
    margin-top: 1rem;
    padding: 0.5rem;
    color: black;
    font-size: 1rem;
    font-family: "Lato", sans-serif;

    @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
      width: 90%;
    }

    &:focus {
      outline: none;
      border: none;
    }
  }

  button {
    padding: 0.5rem 0.9rem;
    border: none;
    cursor: pointer;
    width: 180px;
    margin: 0.8rem 0;
    font-size: 0.9rem;
    border-radius: 4px;
    background-color: rgba(174, 164, 164);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(133, 121, 121);
    }
  }

  /* p {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.8rem;
    color: black;
  } */
`;

export const ImageGif = styled.img`
  width: 25px;
  height: 25px;
  mix-blend-mode: multiply;
`;

export const IconWarn = styled.p`
  color: #ca1337;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    font-size: 0.9rem;
  }
  

  span {
    color: red;
    margin-left: 0.2rem;

    @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
      margin-left: 0.1rem;
    }
  }
`;

export const HeartLoadingSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 360px;
    height: 360px;

    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
      width: 350px;
      height: 350px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
      width: 330px;
      height: 330px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
      width: 280px;
      height: 280px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
      width: 250px;
      height: 250px;
    }
  }
`;

export const InfoLetterMe = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;

  @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    font-size: 0.9rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    font-size: 0.8rem;
  }

  span {
    margin-left: 0.5rem;
    @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
      margin-left: 0.3rem;
    }
  }
`;
