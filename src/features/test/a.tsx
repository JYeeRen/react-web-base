import { useState } from 'react';
import { Activity } from '@ivliu/react-offscreen';

const Counter = () => {
  const [count, setCount] = useState(0);

  return <p onClick={() => setCount(count + 1)}>{count}</p>;
};

const A = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>-{open}-</button>
      <Activity mode={open ? 'visible' : 'hidden'}>
        <Counter />
      </Activity>
    </div>
  );
};

export default A;
