import React from "react";

import classes from "./Button.module.scss";
import ButtonLoader from "./ButtonLoader";
import classNames from "classnames";

const Button = ({
  children,
  variant = "primary",
  styles,
  className,
  isLoading,
  ...rest
}) => {
  return (
    <button
      className={classNames([
        className,
        classes.btn,
        classes[variant],
        { [classes.loading]: isLoading },
      ])}
      style={{ ...styles }}
      {...rest}
    >
      {variant === "primary" ? <div className={classes.green}></div> : null}
      {isLoading ? <ButtonLoader color={""} /> : <>{children}</>}
    </button>
  );
};
export { Button };
