import React from 'react';

function ItemList({ items, selectedCategory }) {
  return (
    <div className="item-list">
      <h4>Items in Category: ({selectedCategory})</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
