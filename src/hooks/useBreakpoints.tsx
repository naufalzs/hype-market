"use client";
import useMedia from "use-media";

const useBreakpoints = () => {
  // Based on Tailwind CSS breakpoints
  const isSm = useMedia("(min-width: 640px)");
  const isMd = useMedia("(min-width: 768px)");
  const isLg = useMedia("(min-width: 1024px)");
  const isXl = useMedia("(min-width: 1280px)");
  const is2Xl = useMedia("(min-width: 1536px)");

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
  };
};

export default useBreakpoints;
