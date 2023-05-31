import foo from './foo.js'
import { sum } from 'lodash-es'
const test = require('./test.js')

export default function () {
  console.log(foo)
  console.log(sum([1, 2, 3]))
  console.log(test)
}
