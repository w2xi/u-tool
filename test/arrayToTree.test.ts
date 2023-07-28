import { arrayToTree } from "../src/arrayToTree";

describe('[arrayToTree]', () => {
  test('convert array to tree by default', () => {
    const userArr = [
      { id: 1, pid: 0, name: 'root' },
      { id: 2, pid: 1, name: 'A' },
      { id: 3, pid: 1, name: 'B' },
    ];
    const userTreeOrigin = [
      { id: 1, pid: 0, name: 'root', children: [
          { id: 2, pid: 1, name: 'A', children: [] },
          { id: 3, pid: 1, name: 'B', children: [] },
        ]
      },
    ]
    const userTree  = arrayToTree(userArr, { id: 'id', parentId: 'pid' })
    expect(userTree).toEqual(userTreeOrigin)
  })
})