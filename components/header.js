import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import Menu from "./menu/menu";

export default function Header(props) {
  return (
    <Wrapper>
      <Name>My Name</Name>
      <StyledMenu>
        <CgMenu />
      </StyledMenu>
      <Menu />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Mier";
  font-size: 5rems;
  font-weight: bolder;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

const Name = styled.div`
  background-color: transparent;
  color: ${(props) => props.theme.text};
  font-size: 1.3rem;
`;

const StyledMenu = styled.div`
  background-color: transparent;
  font-size: 1.7rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.text};
`;
