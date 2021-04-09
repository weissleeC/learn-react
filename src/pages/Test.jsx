import React, { Fragment } from "react";

const Test = (props) => {
  console.log(props);

  return (
    <Fragment>
      <div>hello:{props.name}</div>
      <div>
        hello:{props.match.params.id} - {props.match.params.name}
      </div>
    </Fragment>
  );
};

export default Test;
