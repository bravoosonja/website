import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function useLocomotiveScroll(start) {
  useEffect(() => {
    if (!start) return;
    const scrollEl = document.querySelector("#main-container");
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
    return () => {
      cleanup;
    };
  }, [start]);

  return <div>useLocomotiveScroll</div>;
}
