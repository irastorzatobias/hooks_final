import React, { useState, useDeferredValue, useMemo } from "react";

const UseDeferredValueExample = ({ input }) => {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const list = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      list.push(<div key={i}>{deferredInput}</div>);
    }
    return list;
  }, [deferredInput]);

  return list
};

export default UseDeferredValueExample;
