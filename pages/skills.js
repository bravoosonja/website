import styled from "styled-components";

export default function Skills() {
  return (
    <Wrapper>
      <Content>
        <Text>HTML/CSS</Text>
        <Line />
        <Text>Vanilla JavaScript</Text>
        <Line />
        <Text>React</Text>
        <Line />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
`;

const Content = styled.div``;

const Line = styled.div``;

const Text = styled.div``;
