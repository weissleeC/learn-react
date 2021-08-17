import React, { useContext } from "react";
import Theme from "./Theme";

export default (props) => {
  const theme = useContext(Theme);

  return <div className={theme ? `${theme}` : ""}>{props.children}</div>;
};
