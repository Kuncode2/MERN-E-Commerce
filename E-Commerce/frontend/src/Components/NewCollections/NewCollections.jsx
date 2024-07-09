import React, { useEffect, useState } from 'react';
import './NewCollection.css';
import Item from '../Item/Items';
import { backendURL } from '../../config';

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);
  const fetchNewCollections = async () => {
    try {
      const response = await fetch(`${backendURL}/newcollections`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setNewCollection(data);
    } catch (error) {
      console.error('Failed to fetch new collections:', error);
    }
  };

  useEffect(() => {
    fetchNewCollections();
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
