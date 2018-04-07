import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 360px;
  min-height: 480px;
  padding: 2em;
  margin: 2em auto;
  border-radius: 12px;
  box-shadow: 1px 2px 4px black;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.fd || "row"};
  justify-content: ${props => props.jc || "flex-start"};
  align-items: ${props => props.ali || "stretch"};
`;

export const Button = styled.button`
  border-radius: 1em;
  margin: 0.5em;
  outline: none;
  user-select: none;
`;

export const Quote = styled.p`
  text-indent:2em;
`