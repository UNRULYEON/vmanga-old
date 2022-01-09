import { atom, selector } from "recoil"

type User = {
  uid: string
  displayName: string
  email: string
  photoUrl: string
  verified: boolean
}

export const userState = atom<User | undefined>({
  key: "userState",
  default: undefined,
})

export const isAuthenticatingState = atom<boolean>({
  key: "isAuthenticatingState",
  default: true,
})

export const isAuthenticatedState = selector<boolean>({
  key: "isAuthenticatedState",
  get: ({ get }) => {
    return !!get(userState)
  },
})
