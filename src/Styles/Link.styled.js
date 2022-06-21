import styled from "styled-components";
import BodyBackground from "../images/homebackground.jpg";

export const LinkContainer = styled.main`
  width: 100%;
  height: 100%;
  background-image: url(${BodyBackground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const LinkSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: auto;
  margin: 1rem 0 2rem 0;
  background: rgba(172, 150, 150, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    width: 95%;
  }
  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    width: 100%;
  }
`;

export const ButtonCopy = styled.button`
  border: none;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;
  color: ${({ colorcondition }) => colorcondition || "black"};
  cursor: ${(props) => (props.conditon ? "default" : "pointer")};


  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0 1rem;

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    width: 100%;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-family: Tahoma, Geneva, sans-serif;
    /* font-size: 22px; */
    letter-spacing: 0.2px;
    word-spacing: 1px;
    color: #3f1842;
    font-weight: 400;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: none;

    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
      font-size: 1.2rem;
      text-align: center;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      font-size: 1.1rem;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
      font-size: 1rem;
    }
  }

  div {
    width: 85%;
    display: flex;
    background: white;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
      width: 100%;
    }

    input {
      width: 100%;
      padding: 0.5rem 0.8rem;
      font-size: 1.2rem;
      color: black;
      border: none;

      @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        font-size: 1.1rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
        font-size: 1rem;
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
        font-size: 0.9rem;
        padding: 0.4rem 0.7rem;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

export const LinkWrapper2 = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 0;

  h3 {
    /* text-transform: uppercase; */
    font-family: Impact, Charcoal, sans-serif;
    font-size: 28px;
    letter-spacing: 1.2px;
    word-spacing: 1.2px;
    color: #3f1842;
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;

    @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
      font-size: 25px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      font-size: 23px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
      font-size: 21px;
    }
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 380px;
  background: rgba(111, 64, 158, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow-y: scroll;
  position: relative;

  @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    height: 370px;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobileM}) {
    width: 70%;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  /* IE and Edge */
  /* Firefox */
  .example {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const MessageSection = styled.div`
  width: auto;
  height: auto;
  padding: 0rem 0.5rem;
  margin: 0 1.3rem;
  background-color: #4f4952;
  border-radius: 4px;
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
    padding: 0.5rem 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
    padding: 0.4rem 0.4rem;
  }

  &:nth-child(1) {
    margin-top: 0.5rem;
  }
`;

export const MessageMain = styled.section`
  /* padding: 0 1.5rem 0.4rem 1.5rem; */
  display: flex;
  justify-content: end;
  width: 100%;
  height: auto;
  flex-direction: column;
  z-index: 20;

  /* @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
    padding: 0 1.3rem 0.3rem 1.3rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
    padding: 0 1.1rem 0.2rem 1.1rem;
    width: auto;
  } */
`;

export const MessageSend = styled.p`
  color: #e3dde7;
  font-size: 1rem;
  font-family: "Lato", sans-serif;
`;

export const NewMessageNotification = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.2rem;
  background: rgba(34, 6, 35, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  bottom: 0;
  z-index: 50;
  cursor: pointer;
`;

export const Notification = styled.p`
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
  padding: 0.2rem 0;
  color: white;
`;

export const NoMessageSection = styled.section`
  width: 100%;
  height: 378px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.1rem;

    @media (max-width: ${({ theme }) => theme.responsive.tabletS}) {
      font-size: 1rem;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
      font-size: 0.9rem;
    }
  }
`;


export const MessageSection2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    padding-top: 0.3rem;
    padding: 0 1.4rem;
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;

    @media (max-width: ${({ theme }) => theme.responsive.tabletXS}) {
      padding-top: 0.2rem;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobileL}) {
      font-size: 0.8rem;
    }

    &:nth-child(2):hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;


export const AuthorSection = styled.div`
  width: 100;
  margin-top: 0.5rem;
  p{
    text-align: center;
    font-weight: 600;
  }
`