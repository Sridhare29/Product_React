import React, { useEffect, useState } from 'react';

function ProductAdd() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");

  async function addProduct() {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('productImageUrl', productImageUrl);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('categoryId', categoryId);
    const data = {
      name,
      productImageUrl,
      description,
      price,
      categoryId,
    };
  
    console.warn("products :" ,name,price,description,categoryId,productImageUrl)
    try {
      let response = await fetch("https://localhost:7014/api/Product/Create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      alert("An error occurred. Please check the console for details.");
      console.error('Error:', error);
    }
  }


  return (
    <div className="container mt-5">
      <h1>Add Product</h1>
      <form >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
           onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImageUrl" className="form-label">
            Product Image URL:
          </label>
          <input
            type="text"
            className="form-control"
            id="productImageUrl"
            name="productImageUrl"
            onChange={(e) => setProductImageUrl(e.target.value)}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="categoryId"
            onChange={(e) => setCategoryId(e.target.value)}
            />
        </div>
        <button type="submit" onClick={addProduct} className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );

}

export default ProductAdd