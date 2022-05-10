import styled from "styled-components";

interface IButton {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IButton) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

const StyledButton = styled.button`
  min-width: 28px;
  padding: 8px 16px;
  border: none;
  border-radius: 16px;
  background: #0071e3;

  font-family: "SF-Regular";
  font-size: 17px;
  text-align: center;
  color: ${({ theme }) => theme.textButton};

  white-space: nowrap;
  cursor: pointer;
`;
