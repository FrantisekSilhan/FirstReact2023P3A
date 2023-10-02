import {useState} from "react"

const Counter = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <span>
      <button onClick={() => setValue(prevValue => prevValue - 1)}>-</button>
      <span>{value}</span>
      <button onClick={() => setValue(prevValue => prevValue + 1)}>+</button>
    </span>
  );
}

export default Counter;