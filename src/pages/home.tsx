import { auth } from "@fb"
import { signOut } from "firebase/auth"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import "./home.css"

const Home = () => {
  const onSignOut = () => signOut(auth)

  return (
    <div className="home">
      home <button onClick={onSignOut}>sign out</button>

      
      <div className="homeSkeleton">
        <div className="homeSkeletonBox">
          <Stack spacing={1}>                        
            <Skeleton variant="rectangular" width={150} height={225} />
            <Skeleton variant="text" width={150} />
          </Stack>
        </div>
        <div className="homeSkeletonBox">
          <Stack spacing={1}>                        
            <Skeleton variant="rectangular" width={150} height={225} />
            <Skeleton variant="text" width={150} />
          </Stack>
        </div>
        <div className="homeSkeletonBox">
          <Stack spacing={1}>                        
            <Skeleton variant="rectangular" width={150} height={225} />
            <Skeleton variant="text" width={150} />
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Home
