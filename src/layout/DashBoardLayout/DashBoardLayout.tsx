import Nav from "../../shared/Nav/Nav"
import { Outlet } from "react-router-dom";
import SideBar from "../../shared/SideBar/SideBar";
import { useMediaQuery } from 'react-responsive'
import './DashBoardLayout.style.scss'



type Prop = React.PropsWithChildren<{}>
const DashBoardLayout = ({ children }:Prop):React.ReactElement=>{
  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' });


    return (
        <div style={{'backgroundColor':'#fbfbfb',}}>
            <Nav/>
            <br />
            <div className="dashboardlayout__container">
           {
            isLaptop?
            <SideBar/>:''
           }
           <div style={{'padding':'1.5rem',}}>
           <Outlet />
           </div>
            </div>
            
        </div>
    )
}

export default DashBoardLayout