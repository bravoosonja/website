//TODO: Separate each skill
//TODO: Menu bar

import { useEffect } from "react";
import Image from "next/image";
// styles
import styles from "../styles/pages/projects.module.scss";
// components
import AnimatedTitle from "../components/feature/AnimatedTitle";
// data
import { projectItems } from "../data/projectItems";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
//import useWindowSize from "../hooks/useWindowSize";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray("#content");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#projects",
        pin: true,
        scrub: true,
        // snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + document.querySelector("#contents").offsetWidth,
      },
    });
  }, []);

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.wrapper} id="wrapper">
        <div className={styles.title}>
          <AnimatedTitle textToAnimate={"Projects"} />
        </div>
        <div className={styles.content} id="contents">
          {projectItems.map((projectItem) => (
            <div id="content">
              <Image
                key={projectItem.key}
                src={projectItem.path}
                alt={projectItem.name}
                objectFit="cover"
                width={1919}
                height={946}
              />
              <div className={styles.text}>
                <h4>{projectItem.name}</h4>
                <div className={styles.skills}>
                  <h5>{projectItem.skills}</h5>
                </div>
                <p>{projectItem.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
