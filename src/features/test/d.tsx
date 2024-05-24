import { ListTable } from '@visactor/react-vtable';

function D() {
  console.log('render D');

  const records = new Array(1000).fill({}).map((_, idx) => ({ name: 'John', age: 18 + idx, gender: 'male', hobby: '🏀' }));
  console.log(records)
  const option = {
    columns: [
      {
        field: 'name',
        title: 'name'
      },
      {
        field: 'age',
        title: 'age'
      },
      {
        field: 'gender',
        title: 'gender'
      },
      {
        field: 'hobby',
        title: 'hobby'
      }
    ],
    records: records,
    dragHeaderMode: 'all',
    widthMode: 'standard',
    rowSeriesNumber: {
      title: '序号',
      dragOrder: true,
      width: 'auto',
      headerStyle: {
        color: 'black',
        bgColor: 'pink'
      },
      style: {
        color: 'red'
      }
    }
  };

  return <ListTable option={option} height={500} />
}

export default D;
