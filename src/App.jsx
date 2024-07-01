import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="flex gap-10 border-2 border-gray-800 p-8 rounded">
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded bg-red-500 text-white text-xl font-bold"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(decrementByValue({ value: 5 }))}
          className="px-3 py-2 rounded bg-red-700 text-white text-xl font-bold"
        >
          Decrement By 5
        </button>
        <h1 className="text-3xl">{count}</h1>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded bg-green-500 text-white text-xl font-bold"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue({ value: 5 }))}
          className="px-3 py-2 rounded bg-green-700 text-white text-xl font-bold"
        >
          Increment By 5
        </button>
      </div>
    </div>
  );
}

export default App;
