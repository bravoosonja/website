import Link from "next/link";
// styles
import styles from "../styles/components/header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/skills">
            <a>Skills</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   /* margin-left: 50%; */
//   position: fixed;
//   top: 1rem;
//   left: 70%;
//   margin: 0;
//   padding: 0;

//   @media screen and (${device.laptop}) {
//     left: 60%;
//   }
// `;

// const NavItem = styled.button`
//   background: ${(props) => props.theme.blur};
//   backdrop-filter: blur(2em);
//   padding: 1rem;
//   border-radius: 15px;
//   font-weight: bold;
//   text-transform: uppercase;
//   color: ${(props) => props.theme.text};
//   margin-left: 2em;

//   &:hover {
//     color: ${(props) => props.theme.accent};
//   }
// `;

// // mobile menu ?
// const InnerHeader = styled.div`
//   z-index: 10;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   width: 95%;
//   position: sticky;
//   background: ${(props) => props.theme.blur};
//   backdrop-filter: blur(2em);
//   position: fixed;
//   top: 1vh;
//   padding: 0.5rem;
// `;

// const StyledButton = styled.div`
//   border: none;
//   background: none;
//   outline: none;
//   font-size: 1.3rem;
//   font-weight: 700;
//   color: ${(props) => props.theme.text};

//   &:hover {
//     color: ${(props) => props.theme.accent};
//   }
// `;
