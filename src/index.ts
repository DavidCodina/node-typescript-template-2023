// https://www.youtube.com/watch?v=H91aqUHn8sE
// https://www.youtube.com/watch?v=HvxYkugp55A
// See also Udemy Understanding Typescript 2023 edition (Maximilian Schwarzmüller), section 3.
// Still needs jest setup. Will likely need ts-jest
//https://medium.com/@fmoessle/typescript-paths-with-ts-node-ts-node-dev-and-jest-671deacf6428

import fs from 'fs'
import { echo } from 'utils/index.js'

// node test
fs.writeFileSync('test.txt', 'test')

// module import test
echo('\n\nWhuddup!\n')

// eslint test of promises.
const promise1 = new Promise((resolve, _reject) => {
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
