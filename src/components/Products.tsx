import React from "react";
import { useSelector } from "react-redux";

import "./Product.css";
import { ProductItem } from "../store/state";
import { store, add } from "../store";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <div className="container">
      <h1 className="text-center text-white">
        Products<i className="fa-solid fa-cart-circle-plus"></i>
      </h1>

      <div className="row">
        <Link to="/Cart">
          <button type="button" className="my-2 btn btn-secondary btn-lg">
            Go to Cart
            <i className="mx-2 fa-solid fa-arrow-right"></i>
          </button>
        </Link>
        {products.map((product, i) => (
          <div className="card col-md-3 mx-3 my-3" style={{ width: "18rem" }}>
            <img
              src={product.imageUrl}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                onClick={() => store.dispatch(add(product))}
                className="btn btn-primary"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
