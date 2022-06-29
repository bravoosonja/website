import styled from "styled-components";
// icon
import { GiBranchArrow } from "react-icons/gi";

export default function ScrollDown() {
  return (
    <Content>
      <GiBranchArrow />
    </Content>
  );
}

const Wrapper = styled.div``;

const Content = styled.div`
  font-size: 5rem;
  color: ${(props) => props.theme.text};
`;
