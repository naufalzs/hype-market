import { cn } from "@/lib/utils";
import React from "react";

const ButtonVariant = ["primary", "secondary", "outline"] as const;
const ButtonSize = ["sm", "base"] as const;

type ButtonProps = {
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, disabled, variant = "primary", size = "base" },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          "font-semibold rounded-full transition-colors duration-75 focus:outline-none focus-visible:ring-amber-700 focus-visible:ring",
          [
            size === "base" && ["px-4 md:px-6 py-3 md:py-4"],
            size === "sm" && ["px-4 py-2 text-sm"],
          ],
          [
            variant === "primary" && [
              "text-white bg-amber-500 hover:bg-amber-400",
            ],
            variant === "secondary" && [
              "text-black bg-white hover:bg-amber-500 hover:text-white",
            ],
            variant === "outline" && [
              "text-black bg-white ring-1 ring-violet-200 hover:bg-violet-200 ",
            ],
          ],
          className
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
