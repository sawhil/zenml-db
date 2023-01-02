import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { STACK_COLS } from '../../const';
import { DUMMY_STACK_DATA } from '../../const';
import StackComponents from '../StackComponents';

// const baseURL = 'https://mqlc2m.deta.dev/stacks';

const Stacks = () => {

  // Declaring the state to store the Stacks' Data
  const [stackData, setStackData] = useState(DUMMY_STACK_DATA);


  // Fetching the data from API since as of now it doesn't support CORS using DUMMY DATA
  // useEffect(() => {
  //   const fetchStackData = async () => {
  //     const response = await axios.get(baseURL);
  //     setStackData(response.data);
  //   }
  //   fetchStackData();
  // }, []);

  const data = stackData.map((item) => ({...item, 'key': item.id}));

  // Using AntD Table Component to Render the Table with Stack Data
  // And Using StackComponents component to show the component data
  // in a nested table form.
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