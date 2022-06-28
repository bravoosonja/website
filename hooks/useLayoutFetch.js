import { useState } from "react";

// collection of multiple states

export default function useLayoutFetch() {
  const [showCookie, setShowCookie] = useState(true);

  return { showCookie, setShowCookie };
}
