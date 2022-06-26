import styled from "styled-components";

export default function ContactButton() {
  return <StyledContactButton>Contact</StyledContactButton>;
}

const StyledContactButton = styled.button`
  background: ${(props) => props.theme.text};
  position: absolute;
  right: 10vw;
  bottom: 10vh;
  border: 1px solid ${(props) => props.theme.text};
  padding: 20px;
  color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
  border-radius: 10px;
  font-family: "Mier";
  font-size: 1rem;
  text-transform: uppercase;

  span {
    margin-right: 10px;
  }
`;
