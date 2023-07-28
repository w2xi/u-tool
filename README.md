# u-tool

> 日常开发方法集合

## 单元测试

----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |    85.71 |     100 |     100 | 
 arrayToTree.ts |     100 |    85.71 |     100 |     100 | 39
----------------|---------|----------|---------|---------|-------------------

## 方法集合

### arrayToTree

```js
import { arrayToTree } from 'u-tool'
const userList = [
  { id: 1, pid: 0, name: 'root' },
  { id: 2, pid: 1, name: 'A' },
  { id: 3, pid: 1, name: 'B' },
];
arrayToTree(userList, { id: 'id', parentId: 'pid' })
/**
 * [
  *   { id: 1, pid: 0, name: 'root', children: [
  *       { id: 2, pid: 1, name: 'A', children: [] },
  *       { id: 3, pid: 1, name: 'B', children: [] },
  *     ]
  *   },
 * ]
 */
```