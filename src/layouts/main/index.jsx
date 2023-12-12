import { Outlet } from "react-router-dom";
import HeaderBar from "../headerbar/headerbar"
import Wrapper from "../wrapper/wrapper";



export default function MainLayout() {
    return(
        <div className="container">
            <HeaderBar />
            <Wrapper />
            <div className="main">
                <Outlet />
            </div>
        </div>
    )
}