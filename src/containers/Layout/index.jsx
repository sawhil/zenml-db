import SideBar from '../../components/SideBar';
import ContentMain from '../ContentMain';

// Dividing the layout between two vertical sections
// Left SideBar for Navigation and Right Content Part
function Layout() {
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <SideBar/>
      <ContentMain/>
    </div>
  )
}

export default Layout;
