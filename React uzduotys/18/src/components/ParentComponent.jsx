import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent items={items} />
    </div>
  );
};

export default ParentComponent;
