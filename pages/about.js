import styled from "styled-components";

export default function About({ cursorType, cursorChangeHandler }) {
  return (
    <Container>
      <Title>
        <h1>About</h1>
      </Title>
      <Card
      // onMouseEnter={cursorChangeHandler("seeMore")}
      // onMouseLeave={cursorChangeHandler("")}
      >
        <div>
          <h5>My latest obsessions</h5>
          <p>Animation effects</p>
          <p>Parallax scroll</p>
          <p>Thinking of different ways to use mix-blend-mode</p>
        </div>
        <div>
          <h5>My regular obsessions</h5>
          <p>Nutella</p>
          <p>Mechanical keyboards</p>
        </div>
      </Card>
      <Backdrop>
        <Content>
          <h4>
            With appreciation for aesthetics, I enjoy creating fun interactive
            web experiences.
          </h4>
          <p>
            Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros sed,
            blandit eleifend nulla. Nunc nec diam gravida, dapibus ante eget,
            finibus nibh. Nunc sed 4fermentum dui. Aenean arcu velit, euismod at
            congue nec, dictum eget neque. Sed faucibus ornare nulla nec
            ultricies. Vestibulum pretium leo a lobortis efficitur. Etiam id
            dapibus dui. Fusce vehicula mi justo, eu rhoncus urna dignissim in.
            Vivamus tempor turpis ut libero molestie, at elementum magna rutrum.
          </p>
        </Content>
      </Backdrop>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 90vh;
`;

const Title = styled.div`
  left: 12%;
  top: 5%;
  position: relative;
  z-index: 10;
  width: min-content;
  color: ${(props) => props.theme.text};
`;

const Backdrop = styled.div`
  background-color: ${(props) => props.theme.pastel};
  border-radius: 15px;
  padding: 1rem 2rem;
  display: flex;
  /* height: max-content; */
  width: 60%;
  position: absolute;
  top: 35%;
  left: 10%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 50%;
  padding: 3rem;
  padding-top: 4rem;
  width: 40%;

  h4 {
    text-transform: none;
    font-family: "Mier";
    font-size: 3rem;
    line-height: normal;
    color: ${(props) => props.theme.background};
  }
  p {
    margin-top: 1rem;
    color: ${(props) => props.theme.background};
  }
`;

const Card = styled.div`
  margin-top: 2rem;
  padding: 3rem 2rem;
  position: relative;
  top: 0vh;
  left: 3vw;
  border-radius: 15px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  flex-direction: column;
  /* width: min-content; */
  gap: 2rem;
  align-items: flex-start;

  h5 {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.background};

    &:hover {
      color: ${(props) => props.theme.text};
    }
  }

  p {
    line-height: normal;
    font-size: 1.1rem;
    font-weight: bold;
    color: ${(props) => props.theme.background};

    &:hover {
      color: ${(props) => props.theme.text};
    }
  }
`;
