import React, { PropsWithChildren } from "react";
import { Button, ButtonProps } from "@/components/ui/button";

export interface WBtnProps extends ButtonProps, PropsWithChildren {
  customStyle?: string; // You can also add additional custom props
}

export const WBtn: React.FC<WBtnProps> = ({ children, ...buttonProps }) => {
  return <Button {...buttonProps}>{children}</Button>;
};
