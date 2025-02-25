"use client";

import { motion } from "motion/react";
import React from "react";
import { createPortal } from "react-dom";

type BackdropProps = {
  isShow?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

const Backdrop = ({ children, onClick, isShow = true }: BackdropProps) => {
  if (!isShow) return;

  // Check if the backdrop element exists in the DOM
  const backdropElement = document?.getElementById("backdrop");
  if (!backdropElement) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </motion.div>,
    backdropElement
  );
};

export default Backdrop;
