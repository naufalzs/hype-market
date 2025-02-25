import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**  */
export async function fetcher<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(input, init);

    if (!response.ok)
      throw new Error(`Network response was not OK: ${response.statusText}`);

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data`, error);
    throw error;
  }
}
