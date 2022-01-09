import { auth } from "@fb"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
// @ts-ignore
import { Login as LoginComponent } from "doritosxl-login-page"

const provider = new GoogleAuthProvider()

const Login = () => {
  const onLogin = () => signInWithRedirect(auth, provider)

  return <LoginComponent Header="Login" onClick={onLogin} />
}

export default Login
