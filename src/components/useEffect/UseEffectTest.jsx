import React, { useEffect, useState } from "react";

function UseEffectTest() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count has been clicked");
  }, [count]);

  return (
    <div>
      Hello World
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default UseEffectTest;
