// 在 html 会报错；单独执行该js文件不会报错
// import { arrayToTree } from 'u-tools'
import { arrayToTree } from '../dist/esm/index.js'

const userArr = [
  { id: 1, pid: 0, name: 'root' },
  { id: 2, pid: 1, name: 'A' },
  { id: 3, pid: 1, name: 'B' },
];
const userTree  = arrayToTree(userArr, { id: 'id', parentId: 'pid' })

console.log(userTree);