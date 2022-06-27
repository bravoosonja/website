import styled from "styled-components";
// component
import SeeProjects from "../components/UI/seeProjects";

export default function Skills() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>HTML/CSS</Title>
          <Text>
            <p>
              Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros sed,
              blandit eleifend nulla. Nunc nec diam gravida, dapibus ante eget,
              Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros sed,
              blandit eleifend nulla. Nunc nec diam gravida, dapibus ante eget,
            </p>
            <SeeProjects />
          </Text>
          <Line />
        </Content>
        <Content>
          <Title>Vanillla JavaScript</Title>
          <Text>
            <p>
              Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros sed,
              blandit eleifend nulla. Nunc nec diam gravida, dapibus ante eget,
            </p>
          </Text>
          <Line />
        </Content>
        <Content>
          <Title>React</Title>
          <Text>
            <p>
              Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros sed,
              blandit eleifend nulla. Nunc nec diam gravida, dapibus ante eget,
            </p>
          </Text>
          <Line />
        </Content>
        <Content>
          <Title>Frameworks</Title>
          <Text>
            <p>
              Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros sed,
              blandit eleifend nulla. Nunc nec diam gravida, dapibus ante eget,
            </p>
          </Text>
          <Line />
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 95vh;
  width: 100%;
  margin-top: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  height: 30vh;
  width: 75vw;
`;

const Line = styled.div`
  width: 75vw;
  border-bottom: 2px solid ${(props) => props.theme.text}; ;
`;

const Title = styled.h3`
  font-size: 6rem;
`;

const Text = styled.div`
  p {
    font-size: 1.5rem;
  }
`;
