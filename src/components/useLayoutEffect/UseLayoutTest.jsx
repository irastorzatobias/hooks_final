import { useLayoutEffect, useEffect, useRef } from "react";

const UseLayoutEffectTest = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log('EJECUTADO USE EFFECT')
    inputRef.current.value = "HELLO";
  }, []);

  useLayoutEffect(() => {
    console.log('EJECUTADO LAYOUT')
    console.log(inputRef.current.value);
  }, []);

  return (
    <div className="App">
        {/* onChange debajo puesto unicamente por la advertencia */}
      <input ref={inputRef} value="JUAN" style={{ width: 400, height: 60 }} onChange={() => console.log('hello')} />
    </div>
  );
};

export default UseLayoutEffectTest;
