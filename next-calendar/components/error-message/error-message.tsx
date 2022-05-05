import { useTranslation } from "next-i18next";
import styled from "styled-components";

export const ErrorMessage = () => {
  const { t } = useTranslation();

  return <Error>{t("error_message")}</Error>;
};

const Error = styled.p`
  align-self: center;
  font-family: "SF-Light";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.grayColor};
`;
