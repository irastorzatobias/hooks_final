import React, { useId, useState } from "react";

const UseStateTest = () => {
  const [count, setCount] = useState(0);
  const id = useId();

  return (
    <div>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseStateTest;
