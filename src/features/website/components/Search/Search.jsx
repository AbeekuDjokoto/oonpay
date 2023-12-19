import PropTypes from "prop-types";
import React from "react";

import { SearchIcon } from "../../../../assets/icons/Search";
import classes from "./Search.module.scss";

const Search = React.forwardRef(({ placeholder, onChange, height }, ref) => {
  return (
    <div className={classes.wrapper}>
      <div className="cursor-pointer flex items-center">
        <SearchIcon />
      </div>
      <input
        ref={ref}
        className={classes.input}
        data-testid={"search-input"}
        placeholder={placeholder}
        onChange={onChange}
        height={height || "44px"}
      />
    </div>
  );
});

Search.displayName = "Search";

Search.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func,
};

export { Search };
