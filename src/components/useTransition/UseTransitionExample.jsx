import React, { useState, useTransition } from "react";

const UseTransitionExample = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const lista = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        lista.push(e.target.value);
      }
      setList(lista);
    });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Cargando..."
        : list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
};

export default UseTransitionExample;
