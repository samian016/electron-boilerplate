import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

export default function Dashboard() {
    return (
        <div className="h-screen flex flex-shrink-0">
            <Sidebar />
            <Outlet />
        </div>
    )
}