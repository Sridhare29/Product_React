import React from 'react'

function ProductAdd() {
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
            // value={product.name}
            // onChange={handleChange}
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
            // value={product.productImageUrl}
            // onChange={handleChange}
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
            // value={product.description}
            // onChange={handleChange}
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
            // value={product.price}
            // onChange={handleChange}
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
            // value={product.categoryId}
            // onChange={}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );

}

export default ProductAdd