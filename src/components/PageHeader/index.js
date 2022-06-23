import React from "react";
import { TitleSection, Title } from './styleComponent';

const PageHeader = ({ title, subTitle1, subTitle2 }) => {
  return (
    <TitleSection >
      <h1>
        {subTitle1} <span>{subTitle2}</span>
      </h1>
      <Title>{title}</Title>
    </TitleSection>
  )
}
export default PageHeader;