// src/App.js
import React, { useState } from 'react';
import BTree from './components/BTree';
import TreeVisualizer from './components/TreeVisualizer';
import './App.css';

const App = () => {
  const [order, setOrder] = useState(3); // Establecer el orden inicial a 3
  const [tree, setTree] = useState(new BTree(order));
  const [inputValue, setInputValue] = useState('');
  const [newOrder, setNewOrder] = useState(order); // Estado para el nuevo orden

  const handleInsert = () => {
    const key = parseInt(inputValue, 10);
    if (!isNaN(key)) {
      const newTree = new BTree(tree.m);
      Object.assign(newTree, tree);
      newTree.insert(key);
      setTree(newTree);
    }
    setInputValue('');
  };

  const handleReset = () => {
    setTree(new BTree(order)); // Resetea el árbol manteniendo el orden actual
  };

  const handleSetOrder = () => {
    if (newOrder >= 3) { // Asegurarse de que el orden es al menos 3
      setOrder(newOrder);
      setTree(new BTree(newOrder)); // Crea un nuevo árbol con el nuevo orden
    }
  };

  return (
    <div className="App">
      <h1>Árbol B</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleInsert}>Ingrese valores</button>
      </div>
      <div>
        <button onClick={handleReset}>Reiniciar Árbol</button>
      </div>
      <div>
        <input
          type="number"
          value={newOrder}
          onChange={(e) => setNewOrder(parseInt(e.target.value, 10))}
          min="3"
        />
        <button onClick={handleSetOrder}>Orden</button>
      </div>
      <TreeVisualizer node={tree.root} />
    </div>
  );
};

export default App;