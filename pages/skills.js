import styles from "../styles/pages/skills.module.scss";
// icon
import { FiArrowUpRight } from "react-icons/fi";

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <div className={styles.title}>HTML/CSS & JavaScript</div>
            <div className={styles.text}>
              <p>
                Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros
                sed, blandit eleifend nulla. Nunc nec diam gravida, dapibus ante
                eget,
              </p>
            </div>
            <div className={styles.seeProjects}>
              <button className={styles.border}>
                <FiArrowUpRight />
              </button>
              See relevant projects
            </div>
            <div className={styles.line} />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>JavaScript & Web Frameworks</div>
            <div className={styles.text}>
              <p>React</p>
              <p>Next JS</p>
              <p>Gatsby JS</p>
              <p>
                Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros
                sed, blandit eleifend nulla. Nunc nec diam gravida, dapibus ante
                eget,
              </p>
            </div>
            <div className={styles.seeProjects}>
              <button className={styles.border}>
                <FiArrowUpRight />
              </button>
              See relevant projects
            </div>
            <div className={styles.line} />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>Styling Frameworks</div>
            <div className={styles.text}>
              <p>SASS</p>
              <p>Styled Components</p>
              <p>
                Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros
                sed, blandit eleifend nulla. Nunc nec diam gravida, dapibus ante
                eget,
              </p>
            </div>
            <div className={styles.seeProjects}>
              <button className={styles.border}>
                <FiArrowUpRight />
              </button>
              See relevant projects
            </div>
            <div className={styles.line} />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>Network Security</div>
            <div className={styles.text}>
              <h6>Certificates</h6>
              <p>Cisco Network Associate - Routing and Switching</p>
              <p>CompTIA Security +</p>
              <p>
                Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros
                sed, blandit eleifend nulla. Nunc nec diam gravida, dapibus ante
                eget,
              </p>
            </div>
            <div className={styles.seeProjects}>
              <button className={styles.border}>
                <FiArrowUpRight />
              </button>
              Verify
            </div>
            <div className={styles.line} />
          </div>
        </div>
        <div className={styles.pageTitle}>
          <h1>Skills</h1>
        </div>
      </div>
    </div>
  );
}

// const Container = styled.div`
//   width: 100%;
//   height: 95vh;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* width: 100%; */
//   padding: 0 3rem;
//   h1 {
//     /* position: relative; */
//     width: min-content;
//     font-family: "Murmure";
//   }
// `;

// const Content = styled.div`
//   height: 40vh;
//   width: 75vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   line-height: 1;
// `;

// const Line = styled.div`
//   width: 75vw;
//   border-bottom: 2px solid ${(props) => props.theme.text};
// `;

// const SeeProjectsWrapper = styled.div``;

// const Title = styled.h3`
//   font-size: 5rem;
//   font-family: "Manrope";
//   font-weight: 600;
// `;

// const Text = styled.div`
//   p {
//     margin: 2rem 0;
//     font-size: 1.5rem;
//     font-family: "Mier";
//   }
// `;
