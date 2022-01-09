import { auth } from "@fb"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"

const provider = new GoogleAuthProvider()

const Login = () => {
  const onLogin = () => signInWithRedirect(auth, provider)

  return (
    <div>
      login <button onClick={onLogin}>login with google</button>
    </div>
  )
}

export default Login
