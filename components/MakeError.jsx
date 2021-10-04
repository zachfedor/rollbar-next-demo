import * as React from "react";

const MakeError = ({fn}) => {
  const onClick = fn ? fn : () => {
    throw new Error('cause i said so');
  };
  
  return (
    <button onClick={onClick}>Make Error</button>
  );
};

export { MakeError };
