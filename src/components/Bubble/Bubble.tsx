import "./Bubble.scss";
import React from "react";
import classNames from "classnames";

export type TBubble = {
  children: JSX.Element | string;
  variant: "info" | "success" | "error" | "warning";
};

const Bubble: React.FC<TBubble> = ({ children, variant }) => {
  return (
    <div className={classNames("Bubble", { [variant]: true })}>{children}</div>
  );
};

export default Bubble;
