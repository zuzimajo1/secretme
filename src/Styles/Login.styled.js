import styled from "styled-components";
import LetterBackground from "../images/letterbackground.jpeg";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${LetterBackground});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;
  background-color: white;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #3e5151; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #decba4,
    #3e5151
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #decba4,
    #3e5151
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: black;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    flex-direction: column;
    justify-content: center;
  }

  div {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    font-size: 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
    font-size: 1.1rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-right: 1.5rem;

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    padding-right: 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    padding-right: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    padding-right: 0;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 300px;
    margin: 0.5rem 0;
    border-radius: 4px;
    border: none;
    padding: 0.6rem 0.5rem;

    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
      width: 270px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
      width: 230px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      width: 350px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
      width: 300px;
    }

    @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
      width: 280px;
    }

    &:focus {
      outline: 2px solid #3e5151;
    }
  }

  button {
    margin: 0.4rem 0;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    background-color: rgba(143, 127, 100, 0.6);

    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      width: 350px;
    }

    @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
      width: 300px;
    }

    @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
      width: 280px;
    }

    &:hover {
      background-color: rgb(143, 127, 100);
    }
  }

  div {
    a {
      text-decoration: none;

      p {
        margin: 0.1rem 0;
        font-size: 0.9rem;
        cursor: pointer;
        color: black;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const SocialLogin = styled.div`
  padding-left: 1.5rem;
  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    padding-left: 1.4rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    padding-left: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    padding-left: 0;
    
  }
`;

export const FacebookButton = styled.button`
  background-color: rgb(13, 112, 191);
  padding: 0.6rem 0.7rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
  margin: 0.3rem 0;
  display: flex;
  justify-content: baseline;
  align-items: center;
  border-radius: 4px;
  height: 3rem;

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    padding: 0.5rem 0.6rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    padding: 0.4rem 0.5rem;
    font-size: 0.9rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    padding: 0.5rem 0.6rem;
    font-size: 1rem;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
    width: 280px;
  }

  &:hover {
    background-color: rgb(8, 87, 150);
  }
`;

export const GoogleButton = styled.button`
  background-color: rgb(47, 79, 105);
  padding: 0.6rem 0.7rem;
  font-size: 1rem;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin: 0.3rem 0;
  display: flex;
  justify-content: baseline;
  align-items: center;
  border-radius: 4px;
  height: 3rem;

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    padding: 0.5rem 0.6rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    padding: 0.4rem 0.5rem;
    font-size: 0.9rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    padding: 0.5rem 0.6rem;
    font-size: 1rem;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
    width: 280px;
  }

  &:hover {
    background-color: rgb(25, 44, 59);
  }
`;

export const Icon = styled.p`
  font-size: 1.5rem;
  padding-right: 0.5rem;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
