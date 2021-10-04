import * as React from "react";
import { MakeError } from "./MakeError";

const Child = ({ children, level }) => <div id={level}>{children}</div>;

const DeepNest = () => {
  const onClick = (event) => {
    event.doesntExist();
  };

  return (
    <Child level={1}>
      <Child level={2}>
        <Child level={3}>
          <Child level={4}>
            <Child level={5}>
              <MakeError fn={onClick} />
            </Child>
          </Child>
        </Child>
      </Child>
    </Child>
  );
};

export {DeepNest};
