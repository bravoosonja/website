import styled from "styled-components";

export default function Banner() {
  return (
    <Wrapper>
      <Content>
        <h1>
          Always pulling hair, resisting the urge to break my laptop to create
          <span> aesthetic</span>, <span> fun </span> user experiences.
        </h1>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
`;

const Content = styled.div`
  span {
  }
`;
