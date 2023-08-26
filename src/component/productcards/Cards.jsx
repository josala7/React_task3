import React from "react";
import { products } from "../../data/data";

const Card = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center pt-3">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Rating: {product.rating}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                  <button className="btn btn-primary">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;