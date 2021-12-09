import { onAuthStateChanged } from "firebase/auth"
import React from "react"
import { auth } from "../firebase/config"
import { useNavigate } from "react-router-dom"

interface UserInfo {
  displayName?: string
  email?: string
  uid?: string
  photoURL?: string
}
interface IAuthContext {
  user: UserInfo
}
interface IPropTypes {
  children: React.ReactNode
}

export const AuthContext = React.createContext<IAuthContext>({ user: {} })

const AuthProvider = ({ children }: IPropTypes) => {
  const [user, setUser] = React.useState<UserInfo>({})
  let navigate = useNavigate()

  React.useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user
        if (
          displayName !== null &&
          email !== null &&
          uid !== null &&
          photoURL !== null
        )
          setUser({ displayName, email, uid, photoURL })

        navigate("/")
        return
      }

      navigate("/login")
      return
    })
    return () => {
      unsubcribed()
    }
  }, [navigate])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
