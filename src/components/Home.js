import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await fetch("https://localhost:7014/api/Product/GetAll");
      const jsonData = await result.json();
      setData(jsonData);
      console.warn("products: ", jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function deleteProduct(id) {
    let result = await fetch("https://localhost:7014/api/Product/Delete/" + id, {
      method: 'DELETE'
    });
    result = await result.json();
    console.warn(result);
    alert("Product as been Deleted");
    fetchData();
  }

  return (
    <div className='container'>
      <div className='row'>
        {data.map((product) => (
          <div className='col-md-3 mb-4' key={product.id}>
            <br />
            <div className='card h-100'>
              <img
                src={product.productImageUrl}
                className='card-img-top'
                alt={product.name}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text text-secondary'>{product.description}</p>
                <h6 className='card-text'>₹{product.price}</h6>
                <p className='card-text text-secondary'>
                  <b>{product.category.name}</b>
                </p>

                <div>
                  <button className="delete-button" onClick={() => deleteProduct(product.id)}>
                    <FaTrash />    Delete
                  </button>            
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
