import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { STACK_COLS } from '../../const';
import { DUMMY_STACK_DATA } from '../../const';
import StackComponents from '../StackComponents';


// const baseURL = 'http://localhost:5000/api/stacks';

const Stacks = () => {
  // const [stackData, setStackData] = useState();

  // useEffect(() => {
  //   const fetchStackData = async () => {
  //     const response = await axios.get(baseURL);
  //     setStackData(response.data);
  //   }
  //   fetchStackData();
  // }, []);

  const data = DUMMY_STACK_DATA.map((item) => ({...item, 'key': item.id, is_shared: item.is_shared ? "Shared" : "Not Shared"}));

  return (
    <>
      <h1>Stacks</h1>
      <Table
        columns={STACK_COLS}
        expandable={{
          expandedRowRender: StackComponents,
        }}
        bordered={true}
        tableLayout="fixed"
        dataSource={data}
      />
    </>
  );
};
export default Stacks;