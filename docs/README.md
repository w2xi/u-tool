---
title: '起步'
---

# u-tool

## arrayToTree

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
