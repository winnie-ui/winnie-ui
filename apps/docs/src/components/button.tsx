"use client";

import type { ComponentPropsWithRef, PropsWithChildren } from "react";

type ButtonComponentProps = ComponentPropsWithRef<"button">;
type ButtonProps = ButtonComponentProps;

function Button({ children, ...rest }: PropsWithChildren<ButtonProps>) {
  return <button {...rest}>{children}</button>;
}

export { Button };
export type { ButtonProps };
