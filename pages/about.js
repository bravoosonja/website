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
          {/* <Card>
            <div>
              <h5>My latest obsessions</h5>
              <p>Animation effects</p>
              <p>Parallax scroll</p>
            </div>
            <div>
              <h5>My regular obsessions</h5>
              <p>Nutella</p>
              <p>Mechanical keyboards</p>
            </div>
          </Card> */}
        </Backdrop>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 95vw;
  height: max-content;
`;

const Wrapper = styled.div`
  width: 95vw;
`;

const Title = styled.div`
  left: 35vw;
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
  border-radius: 15px;
  padding: 1rem 2rem;
  display: flex;
  margin-left: 25vw;
  height: max-content;
  width: 65%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${(props) => props.theme.text};
  width: 70vw;
  padding: 3rem;
  padding-top: 4rem;

  h4 {
    text-transform: none;
    font-family: "Mier";
    font-size: 3rem;
    line-height: normal;
  }
  p {
    margin-top: 1rem;
  }
`;

// const Card = styled.div`
//   margin-top: 2rem;
//   padding: 2rem;
//   position: static;
//   top: 10vh;
//   left: 10vw;
//   border-radius: 15px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   flex-direction: column;
//   background-color: ${(props) => props.theme.cursor};
//   height: 30vh;
//   width: fit-content;
//   gap: 2rem;
//   opacity: 80%;

//   h5 {
//     font-size: 2rem;
//   }

//   p {
//     line-height: normal;
//     font-size: 1.2rem;
//     backdrop-filter: grayscale(0.8) opacity (0.2);
//   }
// `;
