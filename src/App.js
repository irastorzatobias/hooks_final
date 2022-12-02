import UseEffectTest from "./components/useEffect/UseEffectTest";
import UseReducerTest from "./components/useReducer/UseReducerTest";
import UseStateTest from "./components/useState/UseStateTest";
import UseRefTest from "./components/useRef/UseRefTest";
import UseLayoutEffectTest from "./components/useLayoutEffect/UseLayoutTest";
import UseImperativeHandleTest from "./components/useImperativeHandle/UseImperativeHandleTest";
import CustomHookExample from "./components/customHook/CustomHookExample";
import UseTransitionExample from "./components/useTransition/UseTransitionExample";
import Parent from "./components/useDeferredValue/Parent";

function App() {
  return (
    <div className="App">
      {/* <UseStateTest/> */}
      {/* <UseReducerTest/> */}
      {/* <UseEffectTest/> */}
      {/* <UseRefTest/> */}
      {/* <UseLayoutEffectTest/> */}
      {/* <UseImperativeHandleTest /> */}
      {/* <CustomHookExample /> */}
      {/* <UseTransitionExample/> */}
      <Parent/>
    </div>
  );
}

export default App;
