import styles from "../styles/pages/about.module.scss";
// components
import AnimatedTitle from "../components/feature/AnimatedTitle";
import Skills from "../components/Skills";
import Layout from "../components/layouts/Layout";

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <AnimatedTitle textToAnimate={"About"} />
          </div>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                Ipsum aute occaecat esse magna ex aliqua Lorem quis qui labore
                eiusmod fugiat. Quis consequat esse laboris sint deserunt
                consequat magna deserunt anim. Dolor aliquip id occaecat qui
                occaecat deserunt adipisicing pariatur non tempor sit elit.
                Laboris eiusmod dolore veniam minim deserunt labore fugiat Lorem
                aute adipisicing voluptate et. Non tempor ipsum excepteur dolore
                nulla nostrud cupidatat ad nisi officia ullamco aute culpa
                cillum.
              </p>
              <p>
                Ipsum aute occaecat esse magna ex aliqua Lorem quis qui labore
                eiusmod fugiat. Quis consequat esse laboris sint deserunt
                consequat magna deserunt anim. Dolor aliquip id occaecat qui
                occaecat deserunt adipisicing pariatur non tempor sit elit.
                Laboris eiusmod dolore veniam minim deserunt labore fugiat Lorem
                aute adipisicing voluptate et. Non tempor ipsum excepteur dolore
                nulla nostrud cupidatat ad nisi officia ullamco aute culpa
                cillum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </>
  );
}

About.getLayout = function getLayout(About) {
  return <Layout>{About}</Layout>;
};
