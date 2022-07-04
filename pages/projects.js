//TODO: Horizontal scroll
//TODO: Separate each skill
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

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useEffect(() => {
    const sections = gsap.utils.selector("#content");
    sections("#content").map((items, i) => {
      ScrollTrigger.create({
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        trigger: "#wrapper",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector("#projects").offsetWidth,
      });
    });

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "#wrapper",
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (sections.length - 1),
    //     end: () => "+=" + document.querySelector("#projects").offsetWidth,
    //   },
    // });
  }, []);

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.wrapper} id="wrapper">
        <div className={styles.title}>
          <AnimatedTitle textToAnimate={"Projects"} />
        </div>
        <div className={styles.content} id="content">
          {projectItems.map((projectItem) => (
            <>
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
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
