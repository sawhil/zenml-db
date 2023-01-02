import { Menu } from 'antd';
import { SIDE_BAR_NAV_ITEMS } from '../../const';
import { useNavigate } from 'react-router-dom';

// Using AntD Menu Component to make a menu componnent
// with respective pros and default keys and handlers
function SideBar() {
  // using navigate hook to navigate on menu item clicks
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
