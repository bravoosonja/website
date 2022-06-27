import styled from "styled-components";
// icon
import { BsArrowUpRight } from "react-icons/bs";

export default function SeeProjects() {
  return (
    <Wrapper>
      <Button>
        <BsArrowUpRight />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Button = styled.button``;
