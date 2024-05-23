function A() {
  throw new Error('A');
  console.log('render A');
  return <><div>A</div></>
}

export default A;
