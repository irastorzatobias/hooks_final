import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "showIncrementText":
      return {
        count: state.count,
        showIncrementText: true,
        showDecrementText: false,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "showDecrementText":
      return {
        count: state.count,
        showIncrementText: false,
        showDecrementText: true,
      };
    default:
      return state;
  }
};

const UseReducerTest = () => {
  // Primer parametro es la funcion reducer, y el segundo es el estado inicial.
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showIncrementText: false,
    showDecrementText: false,
  });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "showIncrementText" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
          dispatch({ type: "showDecrementText" });
        }}
      >
        Decrement
      </button>
      {state.showIncrementText && <p>Incremented value</p>}
      {state.showDecrementText && <p>Decreased value</p>}
    </div>
  );
};

export default UseReducerTest;
