import React, { useState } from "react";
import UseDeferredValueExample from "./UseDeferredValueExample";

const Parent = () => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <UseDeferredValueExample input={input} />
    </div>
  )
}

export default Parent;
