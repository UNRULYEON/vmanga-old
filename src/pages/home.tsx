import { auth } from '@fb'
import { signOut } from 'firebase/auth'

const Home = () => {
  const onSignOut = () => signOut(auth)

  return (
    <div>
      home <button onClick={onSignOut}>sign out</button>
    </div>
  )
}

export default Home
