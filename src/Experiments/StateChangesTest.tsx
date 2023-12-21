import React, { useState, memo } from "react";
import { TestComponent, TestComponentProps } from "../Components/TestComponent";
import Wrapper from "../Components/Wrapper";
import { useInterval } from "../hooks/useInterval";
import { useRenderCount } from "../hooks/useRenderCount";

// Non Memoized component
const NonMemoizedComponent: React.FC<TestComponentProps> = () => {
  const [stateCounter, setStateCounter] = useState<number>(1);
  const { count: renderCount } = useRenderCount();
  useInterval(() => {
    setStateCounter((c) => c + 1);
  }, 2000);
  return (
    <TestComponent
      count={renderCount}
      title="Non Memoized Component"
      stateChangeCounter={stateCounter}
    />
  );
};

// Memoized component using React.memo
const MemoizedComponent: React.FC<TestComponentProps> = memo(() => {
  const [stateCounter, setStateCounter] = useState<number>(1);
  const { count: renderCount } = useRenderCount();

  useInterval(() => {
    setStateCounter((c) => c + 1);
  }, 2000);

  return (
    <TestComponent
      title="Memoized Component"
      isMemoized
      count={renderCount}
      stateChangeCounter={stateCounter}
    />
  );
});

const StatesChangesTest: React.FC = () => {
  return (
    <Wrapper title="Component State Changes">
      <MemoizedComponent />
      <NonMemoizedComponent />
    </Wrapper>
  );
};

export default StatesChangesTest;
