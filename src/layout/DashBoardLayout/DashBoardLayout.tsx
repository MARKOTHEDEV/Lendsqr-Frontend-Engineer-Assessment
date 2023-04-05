import Nav from "../../shared/Nav/Nav"
import { Outlet } from "react-router-dom";




type Prop = React.PropsWithChildren<{}>
const DashBoardLayout = ({ children }:Prop):React.ReactElement=>{
    return (
        <div>
            <Nav/>
            {children}
            <Outlet />
            
        </div>
    )
}

export default DashBoardLayout