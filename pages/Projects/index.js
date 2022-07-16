//TODO: Menu bar
//TODO: Change icon links to buttons
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// styles
import styles from "../../styles/pages/projects.module.scss";
// components
import AnimatedTitle from "../../components/feature/AnimatedTitle";
import Layout from "../../components/layouts/Layout";
// icons
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { IconContext } from "react-icons";
// data
import { projectItems } from "../../public/data";

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
          {projectItems?.map((project) => (
            <div className={styles.content} id="content" key={project.id}>
              <div className={styles.image}>
                <Image
                  src={project.imagePath}
                  alt={project.name}
                  objectFit="cover"
                  width={1920}
                  height={929}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.text}>
                <div className={styles.icons}>
                  <IconContext.Provider value={{ color: "white" }}>
                    <a target="_blank" href={project.github}>
                      <FaGithub />
                    </a>
                    <a target="_blank" href={project.live}>
                      <RiExternalLinkLine />
                    </a>
                  </IconContext.Provider>
                </div>
                <Link href={"/projects/" + project.id} key={project.id}>
                  <h4>
                    <a key={project.id}>{project.name}</a>
                  </h4>
                </Link>
                <p>{project.info}</p>
                <div className={styles.skills}>
                  {project?.techStack?.map((skill) => (
                    <div className={styles.skill} key={index}>
                      <h5>{skill}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Projects.getLayout = function getLayout(Projects) {
  return <Layout>{Projects}</Layout>;
};
