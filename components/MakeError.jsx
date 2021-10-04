import * as React from "react";

const MakeError = ({fn}) => {
  const onClick = fn ? fn : () => window.doesntExist();
  
  return (
    <button onClick={onClick}>Make Error</button>
  );
};

export { MakeError };
