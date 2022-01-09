import { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'

const DebugObserver = () => {
  const snapshot = useRecoilSnapshot()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return

    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node))
    }
  }, [snapshot])

  return null
}

export default DebugObserver
