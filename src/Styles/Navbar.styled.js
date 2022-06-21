import styled from "styled-components";

export const NavbarStyle = styled.section`
  height: 8vh;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  background: rgba(62, 81, 81, 0.9);

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    padding: 0 2rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    padding: 0 1rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
    padding: 0 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
    padding: 0 0.2rem;
  }

  div {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;

      @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        width: 38px;
        height: 38px;
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
        width: 32px;
        height: 32px;
      }
    }

    button {
      font-size: 0.9rem;
      border: none;
      cursor: pointer;
      padding: 0.4rem 0.5rem;
      background-color: #f05246;
      color: #d4cccb;
      text-transform: capitalize;

      @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
        font-size: 0.8rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
        padding: 0.3rem 0.4rem;
      }
    }

    h3 {
      margin: 0 1rem;
      color: #d4cccb;
      font-size: 1.3rem;

      @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        font-size: 1.2rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
        margin: 0 0.8rem;
        font-size: 1.1rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
        margin: 0 0.4rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
        margin: 0 0.2rem;
        font-size: 1rem;
      }
    }

    h1 {
      letter-spacing: 1px;
      font-size: 1.9rem;
      margin-left: 0.5rem;

      @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        font-size: 1.7rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
        font-size: 1.6rem;
        margin-left: 0.4rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
        font-size: 1.4rem;
        margin-left: 0.3rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
        font-size: 1.2rem;
        margin-left: 0.2rem;
      }

      a {
        text-decoration: none;
        color: #d4cccb;
      }
    }

    p {
      font-size: 1.2rem;
      margin: 0 0.5rem;
      @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        margin: 0 0.4rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
        font-size: 1.1rem;
        margin: 0 0.4rem;
      }

      @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
        margin: 0 0.3rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobileS}) {
        margin: 0 0.2rem;
        font-size: 1rem;
      }

      a {
        text-decoration: none;
        color: #d4cccb;
      }
    }
  }
`;
