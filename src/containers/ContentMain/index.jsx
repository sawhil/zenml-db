import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';

function ContentMain() {

  const { Content } = Layout;
  return (
      <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path='/' element={<h1>Home</h1>}></Route>
            <Route path='/stacks' element={<h1>Stack</h1>}></Route>
            <Route path='/stack-components' element={<h1>Stack Components</h1>}></Route>
          </Routes>
      </Content>
  )
}

export default ContentMain;
