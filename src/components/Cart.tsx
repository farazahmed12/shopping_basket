import React from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "../store/state";
import { Link } from "react-router-dom";

import { store, remove } from "../store";
import "./Cart.css";

const Cart = () => {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <Link to="/">
            <button type="button" className="my-2 btn btn-secondary btn-lg">
              <i className="mx-2 fa fa-arrow-left" aria-hidden="true"></i>
              Products
            </button>
          </Link>
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">
                  Cart - {products.filter((product) => product.added).length}{" "}
                  items
                </h5>
              </div>
              <div className="card-body">
                {products
                  .filter((product) => product.added)
                  .map((product: ProductItem) => (
                    <React.Fragment>
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={product.imageUrl}
                              className="w-100"
                              alt="cart"
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2) ",
                                }}
                              ></div>
                            </a>
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong>{product.title}</strong>
                          </p>
                          <p>Color: red</p>
                          <p>Size: M</p>

                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => store.dispatch(remove(product))}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm mb-2"
                            data-mdb-toggle="tooltip"
                            title="Move to the wish list"
                          >
                            <i className="fas fa-heart"></i>
                          </button>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          ></div>

                          <p className="text-start text-md-center">
                            <strong>${product.price}</strong>
                          </p>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>
                      $
                      {products
                        .filter((product) => product.added)
                        .reduce((acc, current) => (acc += current.price), 0)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>
                        $
                        {products
                          .filter((product) => product.added)
                          .reduce((acc, current) => (acc += current.price), 0)}
                      </strong>
                    </span>
                  </li>
                </ul>

                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
