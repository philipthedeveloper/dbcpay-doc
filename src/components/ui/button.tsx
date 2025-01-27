import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-hover focus:bg-primary-focus focus:border focus:border-primary-focus focus:shadow-primary outline-none",
        secondary_blue:
          "bg-secondary-blue text-secondary-blue-foreground hover:bg-secondary-blue-hover focus:border focus:border-secondary-blue-focus focus:shadow-secondary-blue outline-none",
        tertiary:
          "bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover focus:border focus:border-tertiary-focus focus:shadow-tertiary outline-none",
        secondary_gray:
          "bg-secondary-gray text-secondary-gray-foreground border border-secondary-gray hover:bg-secondary-gray-hover hover:border-secondary-gray-hover focus:border-secondary-gray-focus focus:shadow-secondary-gray outline-none",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-10 px-4 py-[10px] rounded-[2.5rem] text-sm font-medium",
        md: "h-11 px-5 py-3 rounded-[2.5rem] text-sm font-medium",
        lg: "h-12 px-5 py-3 rounded-[2.5rem] text-base font-normal",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
