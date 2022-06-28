import styled from "styled-components";
// component
import SeeProjects from "../components/UI/seeProjects";

export default function Skills() {
  return (
    <Container>
      <Wrapper>
        <h1>Skills</h1>
        <Content>
          <Title>HTML/CSS</Title>
          <Text>
            <p>
              Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros sed,
              blandit eleifend nulla. Nunc nec diam gravida, dapibus ante eget,
              Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros sed,
              blandit eleifend nulla. Nunc nec diam gravida, dapibus ante eget,
            </p>
          </Text>
          <SeeProjectsWrapper>
            <SeeProjects />
          </SeeProjectsWrapper>
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
  width: 100%;
  height: 95vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  padding: 0 3rem;
  h1 {
    position: relative;
    left: 20%;
    width: min-content;
  }
`;

const Content = styled.div`
  height: 40vh;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1;
`;

const Line = styled.div`
  width: 75vw;
  border-bottom: 2px solid ${(props) => props.theme.text};
`;

const SeeProjectsWrapper = styled.div``;

const Title = styled.h3`
  font-size: 6rem;
`;

const Text = styled.div`
  p {
    margin: 2rem 0;
    font-size: 1.5rem;
  }
`;
