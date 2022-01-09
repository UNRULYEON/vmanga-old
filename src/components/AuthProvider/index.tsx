import { isAuthenticatedState, userState } from '@state'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { isAuthenticatingState } from '@state'
import { useSnackbar } from 'notistack'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@fb'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { enqueueSnackbar } = useSnackbar()

  const from = (location.state as any)?.from?.pathname || '/'

  const setUser = useSetRecoilState(userState)
  const isAuthenticated = useRecoilValue(isAuthenticatedState)
  const [isAuthenticating, setIsAuthenticating] = useRecoilState(isAuthenticatingState)

  onAuthStateChanged(auth, user => {
    if (user) {
      setUser({
        uid: user.uid,
        displayName: user.displayName!,
        email: user.email!,
        photoUrl: user.photoURL!,
        verified: user.emailVerified
      })
      enqueueSnackbar(`Welcome ${user.displayName}!`, { variant: 'success', preventDuplicate: true })
    } else {
      setUser(undefined)
    }

    setIsAuthenticating(false)
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true })
    }
  }, [from, isAuthenticated, navigate])

  if (isAuthenticating) return <>splash screen / loading</>

  return <>{children}</>
}

export default AuthProvider
