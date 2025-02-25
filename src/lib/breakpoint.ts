"use client";

// Based on Tailwind CSS breakpoints
export const is2XlScreen = window.matchMedia("(min-width: 1536px)").matches;
export const isXlScreen = window.matchMedia("(min-width: 1280px)").matches;
export const isLgScreen = window.matchMedia("(min-width: 1024px)").matches;
export const isMdScreen = window.matchMedia("(min-width: 768px)").matches;
export const isSmScreen = window.matchMedia("(min-width: 640px)").matches;
