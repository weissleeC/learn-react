import React from "react";
import Theme from "./Theme";

export default (props) => {
  const { theme = "light" } = props;

  return (
    <div className="container">
      <Theme.Provider value={theme}>{props.children}</Theme.Provider>
    </div>
  );
};
