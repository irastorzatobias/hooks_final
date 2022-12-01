import { useCallback, useState } from "react";

const UseCallbackTest = () => {
  const [height, setHeight] = useState(100);
  const [age, setAge] = useState(3);

  const handleSetHeight = useCallback(() => setHeight(height + 10), [height]);
  const handleSetAge = useCallback(() => setAge(age + 1), [age]);

  return <></>;
};

export default UseCallbackTest;