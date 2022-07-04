//TODO: Menu bar

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// styles
import styles from "../styles/pages/projects.module.scss";
// components
import AnimatedTitle from "../components/feature/AnimatedTitle";
// data
import { projectItems } from "../data/projectItems";
// icons
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { IconContext } from "react-icons";

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
        <div className={styles.contents} id="contents">
          {projectItems.map((projectItem) => (
            <div className={styles.content} id="content">
              <div className={styles.image}>
                <Image
                  key={projectItem.key}
                  src={projectItem.path}
                  alt={projectItem.name}
                  objectFit="cover"
                  width={1920}
                  height={929}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.text}>
                <h4>{projectItem.name}</h4>
                <div className={styles.skills}>
                  {projectItem.skills.map((skill) => (
                    <div className={styles.skill}>
                      <h5>{skill}</h5>
                    </div>
                  ))}
                </div>
                <p>{projectItem.info}</p>
                <div className={styles.icons}>
                  <IconContext.Provider value={{ color: "white" }}>
                    <a
                      target="_blank"
                      href={projectItem.github}
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      target="_blank"
                      href={projectItem.live}
                      rel="noopener noreferrer"
                    >
                      <RiExternalLinkLine />
                    </a>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.icon}></div>
        </div>
      </div>
    </div>
  );
}
