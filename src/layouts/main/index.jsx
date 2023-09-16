import { Outlet } from "react-router-dom";
import HeaderBar from "./headerbar";
import HeaderWrapper from "./headerbar/headerwrapper";

export default function MainLayout() {
    return(
        <div className="container">
            <HeaderBar />
            <div className="headerWrapper">
                <HeaderWrapper />
            </div>
            <div className="main">
                <Outlet />
            </div>
        </div>
    )
}