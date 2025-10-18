import React from 'react';
import useFetch from '../components/useFetch';
import ProductCard from '../components/ProductCard';
import './CSS/Shop.css';

const Shop = () => {
  const { data: products, loading, error } = useFetch('http://localhost:3000/products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="shop">
      <div className="shopTitle">
      </div>
      <div className="products">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
