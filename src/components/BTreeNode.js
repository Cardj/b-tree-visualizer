// src/components/BTreeNode.js
class BTreeNode {
  constructor(m, isLeaf) {
    this.m = m; // Orden del árbol (número máximo de hijos)
    this.isLeaf = isLeaf;
    this.keys = [];
    this.children = [];
  }

  insertNonFull(key) {
    let i = this.keys.length - 1;

    if (this.isLeaf) {
      while (i >= 0 && this.keys[i] > key) {
        i--;
      }
      this.keys.splice(i + 1, 0, key);
    } else {
      while (i >= 0 && this.keys[i] > key) {
        i--;
      }
      i++;
      if (this.children[i].keys.length === this.m - 1) {
        this.splitChild(i, this.children[i]);
        if (this.keys[i] < key) {
          i++;
        }
      }
      this.children[i].insertNonFull(key);
    }
  }

  splitChild(i, y) {
    let z = new BTreeNode(y.m, y.isLeaf);
    const t = Math.floor((this.m - 1) / 2); // índice central

    z.keys = y.keys.splice(t + 1, y.keys.length - t - 1);
    if (!y.isLeaf) {
      z.children = y.children.splice(t + 1, y.children.length - t - 1);
    }

    this.children.splice(i + 1, 0, z);
    this.keys.splice(i, 0, y.keys.pop());
  }
}

export default BTreeNode;