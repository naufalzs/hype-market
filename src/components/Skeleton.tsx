import { cn } from "@/lib/utils";
import React from "react";

type SkeletonProps = React.ComponentPropsWithoutRef<"div">;

const Skeleton = ({ className, ...rest }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "bg-neutral-100 p-5 rounded-3xl animate-shimmer",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(to right, #f5f5f5 0%, #e5e5e5 20%, #f5f5f5 40%, #f5f5f5 100%)",
        backgroundSize: "300px 100%",
        backgroundRepeat: "no-repeat",
      }}
      {...rest}
    ></div>
  );
};

export default Skeleton;
