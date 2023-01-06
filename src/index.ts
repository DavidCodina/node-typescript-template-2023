import fs from 'fs'
import { echo } from 'utils/index.js'

// import test
fs.writeFileSync('test.txt', 'test')
echo('\n\nWhuddup!\n')

// ESLint Promise test
export const promise1 = new Promise((resolve, _reject) => {
  resolve('Success!')
})

export const func = () => {
  return promise1
    .then((value) => {
      return value
    })
    .catch((err) => {
      console.log(err)
    })
}

promise1
  .then((value) => {
    return value
  })
  .catch((err) => {
    console.log(err)
  })
