import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { isAuthenticatedState } from "@state"

const Layout = () => {
  const location = useLocation()
  const isAuthenticated = useRecoilValue(isAuthenticatedState)

  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} />

  return <Outlet />
}

export default Layout
