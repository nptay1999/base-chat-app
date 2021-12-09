import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { connectAuthEmulator, getAuth } from "firebase/auth"
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"

const firebaseConfig = {}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const auth = getAuth(app)
const database = getFirestore(app)

if (window.location.hostname === "localhost") {
  // connectAuthEmulator(auth, "http://localhost:9099")
  // connectFirestoreEmulator(database, "localhost", 8080)
}
export { auth, database }
export default app
