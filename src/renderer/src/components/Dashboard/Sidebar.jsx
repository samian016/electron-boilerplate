import { SignOut, Kanban, BellRinging } from "@phosphor-icons/react";
import { useAuth } from "../../Context/AuthProvider";
import { NavLink } from "react-router-dom";

const routes = [
    {
        id: 1,
        name: "Tasks",
        Icon: Kanban,
        path: "/"
    },
    {
        id: 2,
        name: "Notifications",
        Icon: BellRinging,
        path: "/notifications"
    }
];

export default function Sidebar() {
    const { user, logout } = useAuth();
    return (
        <nav className="min-w-[3.8em] border-r border-utilGreen shadow-2xl bg-lightBase flex flex-col justify-between items-center gap-8">
            <div className="max-w-9 max-h-9 rounded-full border-2 border-utilGreen my-5 overflow-hidden">
                <img className="w-full h-full" src={`${import.meta.env.RENDERER_VITE_SERVER_URL}/${user?.avatar}`} alt="Avatar" onError={(e) => e.target.src = "https://www.electronjs.org/assets/img/logo.svg"} />
            </div>
            <div className="flex-grow flex flex-col gap-6">
                {
                    routes.map(({ name, id, Icon, path }) => (
                        <NavLink
                            key={name + id}
                            to={path}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500" : ""
                            }
                        >
                            <Icon className="cursor-pointer" size={28} />
                        </NavLink>
                    ))
                }
            </div>
            <div className="max-w-9 max-h-9 my-5">
                <SignOut onClick={() => logout()} className="text-base cursor-pointer" size={28} />
            </div>
        </nav>
    )
}