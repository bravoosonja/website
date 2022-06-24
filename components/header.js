import styled from "styled-components";
import { CgMenu } from "react-icons/cg";

export default function Header() {
  return (
    <Wrapper>
      <Name>My Name</Name>
      <StyledMenu>
        <CgMenu />
      </StyledMenu>
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
`;

const StyledMenu = styled.div`
  background-color: transparent;
  font-size: 1.5rem;
`;
