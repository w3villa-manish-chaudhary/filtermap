import React, { useState } from 'react';

const productsData = [
  { id: 1, name: 'Avocado', price: 2.0 },
  { id: 2, name: 'Blueberry', price: 3.0 },
  { id: 3, name: 'Coconut', price: 1.5 },
  { id: 4, name: 'Dragonfruit', price: 4.0 },
  { id: 5, name: 'Elderflower', price: 2.5 },
  { id: 6, name: 'Fig', price: 3.2 },
  { id: 7, name: 'Grapefruit', price: 2.7 },
  { id: 8, name: 'Huckleberry', price: 3.5 },
  { id: 9, name: 'Indian Fig', price: 2.8 },
  { id: 10, name: 'Jackfruit', price: 4.5 },
  { id: 11, name: 'Kumquat', price: 1.8 },
  { id: 12, name: 'Lychee', price: 3.1 },
  { id: 13, name: 'Mango', price: 2.0 },
  { id: 14, name: 'Noni', price: 2.2 },
  { id: 15, name: 'Olive', price: 3.4 },
  { id: 16, name: 'Pomegranate', price: 4.2 },
  { id: 17, name: 'Quince', price: 3.8 },
  { id: 18, name: 'Raspberry', price: 2.9 },
  { id: 19, name: 'Starfruit', price: 3.6 },
  { id: 20, name: 'Tamarind', price: 2.3 },
  { id: 21, name: 'Uva', price: 4.1 },
  { id: 22, name: 'Voavanga', price: 3.0 },
  { id: 23, name: 'Watermelon', price: 4.0 },
];

function ProductFilter() {
  const [filterName, setFilterName] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredProducts = productsData.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(filterName.toLowerCase());
    const matchesPrice = (minPrice || maxPrice) 
      ? (product.price >= parseFloat(minPrice || 0) && product.price <= parseFloat(maxPrice || Infinity))
      : true;
    return matchesName && matchesPrice;
  });

  return (
    <div className="product-filter">
      <h1>Fruit Market</h1>
      <input
        type="text"
        placeholder="Search by fruit name"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        min="0"
        step="0.01"
      />
      <input
        type="number"
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        min="0"
        step="0.01"
      />
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductFilter;
