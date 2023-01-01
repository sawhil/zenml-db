import { Menu } from 'antd';
import { SIDE_BAR_NAV_ITEMS } from '../../const';
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const navigate = useNavigate();
  return (
      <>
        <Menu 
          onClick={({key}) => {navigate(key)}}
          items={SIDE_BAR_NAV_ITEMS}
          defaultSelectedKeys={['/stacks']}
        />
      </>
  )
}

export default SideBar;
