import AuthProvider from "@components/AuthProvider"
import Layout from "@components/Layout"
import { Route, Routes } from "react-router-dom"
import { Home, Login } from "./pages"

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<>404</>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
