import SideBar from '../../components/SideBar';
import ContentMain from '../ContentMain';

function Layout() {
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <SideBar/>
      <ContentMain/>
    </div>
  )
}

export default Layout;
