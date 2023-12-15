import classes from "./expandable.module.scss";
import classNames from "classnames";

export const Expandable = ({ expand, children }) => {
  return (
    <div
      className={classNames([classes.content], { [classes.expanded]: expand })}
    >
      <div className={classes.expandable_inner}>{children}</div>
    </div>
  );
};
