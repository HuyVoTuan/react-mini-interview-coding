import { useState, useCallback, useMemo, Component } from "react";

// components
import Title from "./Title";
import Counter from "./Counter";
import Button from "./Button";

function MemoizedComponent(component = Component, dependencies = []) {
  return useMemo(() => {
    return component;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
}

export default function PreventRender() {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(1000);

  const memoizedIncrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, []);

  const memoizedIncrementSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 1000);
  }, []);

  const memoizedTitle = MemoizedComponent(<Title />);

  const memoizedAgeCounter = MemoizedComponent(
    <Counter text="Age" count={age} />,
    [age]
  );

  const memoizedSalaryCounter = MemoizedComponent(
    <Counter text="Salary" count={salary} />,
    [salary]
  );

  const memoizedAgeButton = MemoizedComponent(
    <Button onClick={memoizedIncrementAge}>Increment Age</Button>,
    [memoizedIncrementAge]
  );

  const memoizedSalaryButton = MemoizedComponent(
    <Button onClick={memoizedIncrementSalary}>Increment Salary</Button>,
    [memoizedIncrementSalary]
  );

  return (
    <div className="App">
      {memoizedTitle}
      {memoizedAgeCounter}
      {memoizedAgeButton}
      <br /> <br />
      {memoizedSalaryCounter}
      {memoizedSalaryButton}
    </div>
  );
}
