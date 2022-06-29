import Image from "next/image";
import styled from "styled-components";
// components
import ScrollDown from "./UI/scrollDown";
// icon
import { IconContext } from "react-icons/lib";
import { GiLed } from "react-icons/gi";
// image - gif
import BannerGif from "../assets/images/typing.gif";
import { GiBranchArrow } from "react-icons/gi";

export default function Banner() {
  return (
    <Wrapper>
      {/* <IconContext.Provider value={{ color: "#ff6201" }}>
        <Arrow>
          <span>Scroll down</span>
          <ScrollDown />
        </Arrow>
      </IconContext.Provider> */}
      <Content>
        <Left>
          <h2>I enjoy aesthetic, experiences</h2>
        </Left>
        {/* <h2>aesthetic,</h2> */}
        {/* <ImageWrapper>
          <Image src={BannerGif} alt="Typing" width={698} height={568} />
          <h1>to create aesthetic,</h1>
        </ImageWrapper> */}
        <Right>
          <h2>
            creating fun user
            <IconContext.Provider value={{ color: "#00FF39" }}>
              <Arrow>
                <span>Scroll down</span>
                <GiBranchArrow />
                <GiBranchArrow />
                <GiBranchArrow />
              </Arrow>
            </IconContext.Provider>
          </h2>
        </Right>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  margin-top: 2rem;
`;

const Content = styled.div`
  padding: 1rem 3rem;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  /* gap: 0.5em; */
  font-family: "Manrope";

  h2 {
    font-size: 7rem;
    line-height: 1.5;
    font-weight: 600;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: right;
  text-align: left;
  /* margin-right: 1rem; */
`;

const Right = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: right;
`;

const Arrow = styled.button`
  font-size: 1rem;
  position: relative;
  top: 3vh;
  left: -25vw;
  transform: scale(5) rotate(40deg);
  z-index: 50;
  margin: 0 auto;
  background: transparent;

  /* margin-right: 3rem; */

  span {
    font-family: "Murmure";
    font-size: 0.5rem;
    position: relative;
    color: ${(props) => props.theme.text};
    font-style: italic;

    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;

const ImageWrapper = styled.div`
  /* width: 80%;
  margin: 0 auto; */
  position: relative;

  img {
    width: 70%;
    /* z-index: inherit; */
    /* filter: grayscale(0.8); */
    /* opacity: 90%; */
  }

  h1 {
    color: ${(props) => props.theme.background};
    position: absolute;
    top: 0;
    z-index: 5;
    mix-blend-mode: hard-light;
  }
`;
