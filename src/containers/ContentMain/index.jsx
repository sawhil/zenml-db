import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';

import Stacks from '../../components/Stacks';

function ContentMain() {

  const { Content } = Layout;
  return (
      <Content
          style={{
            margin: '16px 16px',
            padding: 24,
          }}
        >
          <Routes>
            <Route path='/stacks' element={<Stacks/>}></Route>
            <Route path='/stack-components' element={<h1>Stack Components</h1>}></Route>
          </Routes>
      </Content>
  )
}

export default ContentMain;
