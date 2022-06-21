import styled from "styled-components";
import RegisterBackground from "../images/registerbackground.jpg";

export const RegisterMain = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${RegisterBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterSection = styled.section`
  width: 600px;
  height: auto;
  padding: 0.5rem 0.6rem 0.5rem 1.5rem;
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

  @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    padding: 1.4rem 0.5rem 1.4rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 1.5rem;
  }
  /* @media (max-width: ${({ theme }) => theme.responsive.mobileM}) {
    padding: 0.9rem;
  } */

  form {
    display: flex;
    flex-direction: column;
  }
`;


export const RegisterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    margin-left: 0.4rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
    margin-right: 0.2rem;
  } */

  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  input {
    width: 45%;
    border-radius: 4px;
    border: none;
    padding: 0.6rem 0.5rem;
    margin: 0.5rem 0.5rem 0.5rem 0;

    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      width: 350px;
      margin: 0.5rem 0;
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
`;

// export const RegisterDiv = styled.div`
//   display: flex;

// `;

export const RegisterImage = styled.input`
  margin: 0.5rem 0;
  cursor: pointer;
  display: none;
`;

export const RegisterButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    padding: 6px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    width: 130px;
    border-radius: 4px;
    font-size: 1rem;
    border: none;
    background-color: rgba(143, 127, 100, 0.6);
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      margin: 0.4rem 0;
      padding: 5px 7px;
    }

    &:hover {
      background-color: rgb(143, 127, 100);
    }
  }
`;

export const RegisterImageWrapper = styled.div`
  width: 100%;

  label {
    font-size: 0.9rem;
    display: flex;
    justify-content: baseline;
    align-items: center;

    p {
      margin-right: 0.3rem;
      display: flex;
      justify-content: baseline;
      align-items: center;
      cursor: pointer;
    }
  }
`;
