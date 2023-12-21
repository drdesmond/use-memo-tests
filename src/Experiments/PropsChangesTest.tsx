import React, { useState, memo, useEffect } from 'react';
import { TestComponent, TestComponentProps } from '../Components/TestComponent';
import Wrapper from '../Components/Wrapper';
import { useInterval } from '../hooks/useInterval';
import { useRenderCount } from '../hooks/useRenderCount';

// Non Memoized component 
const NonMemoizedComponent: React.FC<TestComponentProps> = ({ propsChangeCounter }) => {
  const { count: renderCount } = useRenderCount();
  return (<TestComponent title='Non Memoized Component' count={renderCount} propsChangeCounter={propsChangeCounter} />)
};

// Memoized component using React.memo
const MemoizedComponent: React.FC<TestComponentProps> = memo(({ propsChangeCounter }) => {
  const { count: renderCount } = useRenderCount();
  return (<TestComponent title='Memoized Component' isMemoized count={renderCount} propsChangeCounter={propsChangeCounter} />)
});

const StatesChangesTest: React.FC = () => {
  const [nonPropState, setNonPropState] = useState<number>(1);
  const [propState, setpropState] = useState<number>(1);
  const { count: renderCount } = useRenderCount();
  useInterval(() => {
    setNonPropState(n => n + 1);
  }, 1000);

  useEffect(() => {
    setInterval(() => {
      setpropState(p => p + 1);
    }, 5000);
  }, []);

  return (

    <Wrapper title='Parent State & Props changes'>
      <div className='p-4 mx-auto my-8 text-left border-yellow-200 border border-md'>
        <h1 className='text-xl font-bold leading-23'>Parent</h1>
        <p> Render Count: {renderCount}</p>
        <p> State ( Non props) Update Count: {nonPropState}</p>
        <p> State (props) Update Count: {propState}</p>
      </div>
      <MemoizedComponent propsChangeCounter={propState} />
      <NonMemoizedComponent propsChangeCounter={propState} />
    </Wrapper>
  );
};

export default StatesChangesTest;
