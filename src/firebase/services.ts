import { addDoc, collection } from "firebase/firestore"
import { database } from "./config"

export const addDocument = (collectionName: string, data: any) => {
  const q = collection(database, collectionName)
  addDoc(q, data)
}

// tao keywords cho displayName, su dung cho search
export const generateKeywords = (displayName: string) => {
  // liet ke tat cac hoan vi. vd: name = ["David", "Van", "Teo"]
  // => ["David", "Van", "Teo"], ["David", "Teo", "Van"], ["Teo", "David", "Van"],...
  const name = displayName.split(" ").filter((word) => word)

  const length = name.length
  let flagArray: Array<boolean> = []
  let result: Array<string> = []
  let stringArray: Array<string> = []

  /**
   * khoi tao mang flag false
   * dung de danh dau xem gia tri
   * tai vi tri nay da duoc su dung
   * hay chua
   **/
  for (let i = 0; i < length; i++) {
    flagArray[i] = false
  }

  const createKeywords = (name: string) => {
    const arrName: Array<string> = []
    let curName = ""
    name.split("").forEach((letter) => {
      curName += letter
      arrName.push(curName)
    })
    return arrName
  }

  function findPermutation(k: number) {
    for (let i = 0; i < length; i++) {
      if (!flagArray[i]) {
        flagArray[i] = true
        result[k] = name[i]

        if (k === length - 1) {
          stringArray.push(result.join(" "))
        }

        findPermutation(k + 1)
        flagArray[i] = false
      }
    }
  }

  findPermutation(0)

  const keywords = stringArray.reduce((acc: Array<string>, cur) => {
    const words = createKeywords(cur)
    return [...acc, ...words]
  }, [])

  return keywords
}
