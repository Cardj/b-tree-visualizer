// src/components/BTree.js
import BTreeNode from './BTreeNode';

class BTree {
  constructor(order) {
    this.root = new BTreeNode(order, true);
    this.m = order;
  }

  insert(key) {
    let r = this.root;
    if (r.keys.length === this.m - 1) {
      let s = new BTreeNode(this.m, false);
      s.children[0] = r;
      s.splitChild(0, r);
      this.root = s;
      s.insertNonFull(key);
    } else {
      r.insertNonFull(key);
    }
  }
}

export default BTree;