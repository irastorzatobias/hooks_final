import React, { useDebugValue } from "react";

// Hook custom

export const useCounter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useDebugValue(count > 0 ? "Positivo" : "Negativo");
  return { count, increment, decrement, reset };
};

const CustomHookExample = () => {
  const { count, increment, decrement, reset } = useCounter(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};


export default CustomHookExample;