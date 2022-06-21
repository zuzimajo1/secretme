import React from 'react'
import HeartLoading from "../images/heart-loading.gif";
import {HeartLoadingSection} from "../Styles/LetterMeUser.styled";

const Loading = () => {
  return (
      <HeartLoadingSection>
          <img src={HeartLoading} alt="Loading"></img>
      </HeartLoadingSection>
  )
}

export default Loading