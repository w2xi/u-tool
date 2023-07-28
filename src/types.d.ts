export type TTree<T> = {
  children?: TTree<T>[];
} & T;