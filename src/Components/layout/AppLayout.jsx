import { Outlet } from "react-router"
import Sidebar from "../Sidebar/Sidebar"

const AppLayout = () => {
  return (
    <div>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default AppLayout