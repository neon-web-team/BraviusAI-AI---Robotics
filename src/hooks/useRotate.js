import { useEffect, useState } from "react";

const useRotate = (ref) => {
  const [rotate, setRotate] = useState(90);

  function handleObserve(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      setRotate(0);
      observer.unobserve(entry.target);
    });
  }
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserve, {
      threshold: 0.2,
    });
    observer.observe(ref.current);
  }, [ref]);

  return rotate;
};
export default useRotate;
