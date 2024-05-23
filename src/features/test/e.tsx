import { logger } from '@infra';
import { memo } from 'react';

function E() {
  logger.common('render E', Date.now());
  const test = () => {
    console.log('render E', Date.now());
  };

  test()
  return <><div onClick={test}>E</div></>
}

export default memo(E);
