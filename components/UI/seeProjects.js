import styled from "styled-components";
// icon
import { BsArrowUpRight } from "react-icons/bs";

export default function SeeProjects() {
  return (
    <Wrapper>
      <Button>
        <BsArrowUpRight />
        See relevant projects
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 1.1rem;
  border: 1px solid ${(props) => props.theme.text};
`;
