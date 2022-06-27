import styled from "styled-components";

export default function About({ props }) {
  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>About</h1>
        </Title>
        <Backdrop>
          <Content>
            <h4>
              With appreciation for aesthetics, I enjoy creating fun interactive
              web experiences.
            </h4>
            <p>
              Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros sed,
              blandit eleifend nulla. Nunc nec diam gravida, dapibus ante eget,
              finibus nibh. Nunc sed 4fermentum dui. Aenean arcu velit, euismod
              at congue nec, dictum eget neque. Sed faucibus ornare nulla nec
              ultricies. Vestibulum pretium leo a lobortis efficitur. Etiam id
              dapibus dui. Fusce vehicula mi justo, eu rhoncus urna dignissim
              in. Vivamus tempor turpis ut libero molestie, at elementum magna
              rutrum.
            </p>
          </Content>
        </Backdrop>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: max-content;
`;

const Wrapper = styled.div`
  width: 100%;
  /* padding: 2rem; */
`;

const Title = styled.div`
  left: 15vw;
  top: 8vh;
  margin-left: 30vw;
  position: relative;
  z-index: 3;
  height: min-content;
  width: min-content;
  color: ${(props) => props.theme.text};
`;

const Backdrop = styled.div`
  background-color: ${(props) => props.theme.pastel};
  backdrop-filter: grayscale(0.5) opacity (0.8);
  border-radius: 15px;
  padding: 1rem 2rem;
  height: max-content;
  display: flex;
  margin-left: 30vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${(props) => props.theme.text};

  h4 {
    text-transform: none;
    font-family: "Mier";
    font-size: 2rem;
    line-height: normal;
  }
  p {
    margin-top: 1rem;
  }
`;
