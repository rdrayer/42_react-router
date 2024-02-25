import React, { useState } from 'react';

function AddItemForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('snack'); // Default to 'snack'

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, description, category });
    // Reset form
    setName('');
    setDescription('');
    setCategory('snack');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="snack">Snack</option>
          <option value="drink">Drink</option>
        </select>
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
