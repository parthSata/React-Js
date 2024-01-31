import React, { useState } from 'react'

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleInputChange = (e) => {
        setNewItem(e.target.value);
    };

    const addItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, { id: Date.now(), text: newItem }]);
            setNewItem('');
        }
    };

    const removeItem = (itemId) => {
        setItems(items.filter((item) => item.id !== itemId));
    };

    return (
        <div>
            <h2>Item List</h2>
            <label>
                Add Item:
                <input type="text" value={newItem} className='border-2' onChange={handleInputChange} />
            </label>
            <button onClick={addItem} className='btn btn-primary'>Add</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.text}{' '}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Item Count: {items.length}</p>
        </div>
    )
}

export default ItemList