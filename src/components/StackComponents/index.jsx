import React from 'react';
import { Table } from 'antd';

import { COMPONENT_COLS } from '../../const';

const StackComponents = (props) => {

    const dataObj = props.components;
    const data = [];
    for (const key of Object.keys(dataObj)) {
        data.push({'component_type': key, 'component_id': dataObj[key][0], 'key': dataObj[key][0]});
    }

    // Using AntD Table Component to Render the Table with Components' Data
    return (
        <>
            <Table
                zcolumns={COMPONENT_COLS}
                bordered={true}
                tableLayout="fixed"
                dataSource={data}
            />
        </>
    );
};
export default StackComponents;