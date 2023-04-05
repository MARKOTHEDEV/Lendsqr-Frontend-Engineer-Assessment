import Nav from "../../shared/Nav/Nav"
import { Outlet } from "react-router-dom";
import SideBar from "../../shared/SideBar/SideBar";
import { useMediaQuery } from 'react-responsive'




type Prop = React.PropsWithChildren<{}>
const DashBoardLayout = ({ children }:Prop):React.ReactElement=>{
  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' });


    return (
        <div>
            <Nav/>
            <br />
            <div style={{'display':'flex'}}>
           {
            isLaptop?
            <SideBar/>:''
           }
            <Outlet />
            </div>
            
        </div>
    )
}

export default DashBoardLayout