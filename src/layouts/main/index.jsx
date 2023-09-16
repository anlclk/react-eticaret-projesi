import { Outlet } from "react-router-dom";
import HeaderBar from "./headerbar";
import Wrapper from "./headerbar/headerwrapper";



export default function MainLayout() {
    return(
        <div className="container">
            <HeaderBar />
            <Wrapper />
            {/* <div className="headerWrapper">
                <HeaderWrapper />
            </div> */}
            <div className="main">
                <Outlet />
            </div>
        </div>
    )
}