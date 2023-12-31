import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const Example = () => {
  const { t } = useTranslation();
  return <ExampleContainer>{t("Example")}</ExampleContainer>;
};

const ExampleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
`;
export default Example;
