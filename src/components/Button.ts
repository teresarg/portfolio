import styled from "styled-components";

const RoundButton = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: 0.15rem solid ${(props) => props.theme.secondary};
  box-sizing: content-box;
  color: ${(props) => props.theme.secondary};
  cursor: pointer;
  display: inline-flex;
  font-size: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
  padding: 1rem;
  vertical-align: top;
  width: 1.5rem;
  &:disabled {
    cursor: initial;
  }
`;

export { RoundButton };
