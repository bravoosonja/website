import { useState } from "react";
import styled from "styled-components";

export default function Cookie() {
  const { showCookie, setShowCookie } = useState(true);
  return (
    <>
      {showCookie && (
        <Wrapper>
          <Content>
            <Text>
              <h4>No, I don't want your non-edible cookies.</h4>
            </Text>
            <AcceptCookie onClick={() => setShowCookie(false)}>
              Real Cookies Only
            </AcceptCookie>
          </Content>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 6vh;
  width: 100%;
  background: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;

const Text = styled.div`
  h4 {
    font-size: 1.2rem;
    color: ${(props) => props.theme.background};
  }
`;

const AcceptCookie = styled.button`
  margin-left: 67vw;
  outline: 1.3px solid ${(props) => props.theme.background};
  padding: 0.5rem;
  color: ${(props) => props.theme.background};
  background: transparent;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
`;
