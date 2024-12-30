import { useEffect, useRef } from "react";

const useNumberAnimation = () => {
  const number = useRef();
  const progressBar = useRef();
  // console.log(progressBar);

  function animateNumbers(num, finalValue, duration) {
    let start = null;
    const finalValueStr = num.getAttribute("data-final-value");
    const charCount = finalValueStr.length;
    num.style.display = "inline-block";
    num.style.width = `${charCount}ch`;
    const numberFormatter = new Intl.NumberFormat("en-US");
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      num.textContent = numberFormatter.format(
        Math.floor(progress * finalValue)
      );
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        num.style.display = "inline";
      }
    }
    window.requestAnimationFrame(step);
  }
  function animateWidth(element, finalWidth, duration) {
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      element.style.width = `${progress * finalWidth}%`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numberElement = entry.target;
            if (numberElement) {
              const finalValue = parseInt(
                numberElement.getAttribute("data-final-value")
              );
              if(finalValue)
              animateNumbers(numberElement, finalValue, 2000);
            }
            const progressBar = entry.target;
            if (progressBar) {
              const finalWidth = parseInt(
                progressBar.getAttribute("data-final-width")
              );
              animateWidth(progressBar, finalWidth, 2000);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1}
    );
    if(number.current)observer.observe(number.current);
    if (progressBar.current) observer.observe(progressBar.current);
  }, []);
  return { number, progressBar };
};
export default useNumberAnimation;
