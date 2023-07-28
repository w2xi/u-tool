(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utool = {}));
})(this, (function (exports) { 'use strict';

  const arrayToTree = (list, { id, parentId }) => {
    var _a;
    const map = [];
    const treeList = list;
    for (let i = 0; i < treeList.length; i += 1) {
      map[treeList[i][id]] = i;
      treeList[i].children = [];
    }
    let node;
    const roots = [];
    for (const item of treeList) {
      node = item;
      if (node[parentId] !== 0) {
        if (treeList[map[node[parentId]]] !== void 0) {
          (_a = treeList[map[node[parentId]]].children) == null ? void 0 : _a.push(node);
        }
      } else {
        roots.push(node);
      }
    }
    return roots;
  };

  var index = {
    arrayToTree
  };

  exports.arrayToTree = arrayToTree;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
