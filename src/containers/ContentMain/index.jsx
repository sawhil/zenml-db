import { Layout, Button } from 'antd';
import { Route, Routes } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import Stacks from '../../components/Stacks';


// Defining the Main Routes and their Respective Rendering Components
function ContentMain() {
  const navigate = useNavigate();

  // Using the Content Component to Wrap the actual content from AntD
  const { Content } = Layout;
  return (
      <Content
          style={{
            margin: '16px 16px',
            padding: 24,
          }}
        >
          <Routes>
            <Route path='/' element={ <Button type="primary" onClick={() => {navigate('/stacks')}}>Go To Stacks</Button> }></Route>
            <Route path='/stacks' element={<Stacks/>}></Route>
            <Route path='/stack-components' element={<h1>Stack Components</h1>}></Route>
          </Routes>
      </Content>
  )
}

export default ContentMain;
