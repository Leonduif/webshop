import styled from "@emotion/styled";
import { COLORS } from "../style/theme";

type ButtonProps = {
  square?: boolean;
};

const Button = styled.button`
  display: block;
  cursor: pointer;
  background-color: ${COLORS.primary};
  padding: 0.7rem;
  color: white;
  width: ${(props: ButtonProps) => (props.square ? "30px" : "auto")};
  height: ${(props: ButtonProps) => (props.square ? "30px" : "auto")};
  position: relative;
  transition: 0.15s linear background-color;

  &:hover {
    background-color: #1aa0cf;
  }

  > span {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
`;

export default Button;
