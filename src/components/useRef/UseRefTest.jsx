import React, { useRef } from "react";

const UseRefTest = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value)
    inputRef.current.value = "";
  };
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={onClick}>Test useRef</button>
    </div>
  );
}

export default UseRefTest;