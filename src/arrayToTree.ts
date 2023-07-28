import type { TTree } from "./types";

// https://loclv.hashnode.dev/converts-flat-list-to-tree-with-typescript-and-no-any-type

/**
 * flat list to tree
 *
 * @param list - a flat list
 * @param params - `{ id, parentId }`: id name and parentId name
 *
 * @example `arrayToTree<IFolder>(
 *   folderArr, { id: 'folderId', parentId: 'folderParentId' });`
 *
 * @returns `TTree`
 */
export const arrayToTree = <T>(
  list: T[],
  { id, parentId }: { id: string; parentId: string }
): TTree<T>[] | [] => {
  /** map between id and array position */
  const map: number[] = [];
  const treeList: TTree<T>[] = list as TTree<T>[];

  for (let i = 0; i < treeList.length; i += 1) {
    /** initialize the map */
    map[(treeList[i] as TTree<T> & { [id: string]: number })[id]] = i;
    /** initialize the children */
    treeList[i].children = [];
  }

  let node: TTree<T> & { [parentId: string]: number };
  /** return value */
  const roots: TTree<T>[] = [];

  for (const item of treeList) {
    node = item as TTree<T> & { [parentId: string]: number };
    if (node[parentId] !== 0) {
      if (treeList[map[node[parentId]]] !== undefined) {
        treeList[map[node[parentId]]].children?.push(node);
      }
    } else {
      roots.push(node);
    }
  }
  return roots;
};
