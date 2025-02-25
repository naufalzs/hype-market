import { cn } from "@/lib/utils";
import React from "react";

const ButtonVariant = ["primary", "secondary"] as const;

type ButtonProps = {
  variant?: (typeof ButtonVariant)[number];
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, variant = "primary" }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          "font-semibold px-6 py-4 rounded-full transition-colors duration-75 focus:outline-none focus-visible:ring-amber-700 focus-visible:ring",
          [
            variant === "primary" && [
              "text-white bg-amber-500 hover:bg-amber-400",
            ],
            variant === "secondary" && [
              "text-black bg-white hover:bg-amber-600 hover:text-white",
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
