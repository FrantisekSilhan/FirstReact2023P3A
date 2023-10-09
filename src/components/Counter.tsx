
const Counter = (
  {
    value, setValue
  }:
  {
    value: number, setValue: React.Dispatch<React.SetStateAction<number>>
  }) => {
  return (
    <span>
      <button onClick={() => setValue(0)}>Reset</button>
      <button onClick={() => setValue(prevValue => prevValue - 1)}>-</button>
      <span>{value}</span>
      <button onClick={() => setValue(prevValue => prevValue + 1)}>+</button>
    </span>
  );
}

export default Counter;