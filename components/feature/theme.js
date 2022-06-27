import { useContext } from "react";
import styled from "styled-components";
// icons
import { GiMoonBats, GiSun } from "react-icons/gi";
import { ThemeContext } from "../../context/theme-context";

export default function Theme() {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledTheme>{theme === "light" ? <GiMoonBats /> : <GiSun />}</StyledTheme>
  );
}

const StyledTheme = styled.button`
  font-style: italic;
  font-size: 1.7rem;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  padding: 0.7rem 0;
  width: full;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.accent};
  }
`;
