import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import "../css/product.scss";

const ProductList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>ProductList</title>
        </Helmet>
        <section className="productlist">
          <article>
            <figure>
              <article>
                <img
                  src={require("../assets/img/39.png")}
                  alt="vendor banner"
                />
              </article>
              <article>
                <div>
                  <div>
                    <img src={require("../assets/img/04.png")} alt="vendor" />
                    <h4>18% Off Groceries</h4>
                    <p>Lagos, Nigeria</p>
                  </div>
                  <Link to="/products">Get a Coupon</Link>
                </div>
                <div>
                  <div>
                    <p>
                      Get an Extra 18% off your total purchase. Limit to one
                      coupon <br /> per customer.
                    </p>
                    <span>This Coupon expires on 24, June 2020</span>
                  </div>
                  <div>
                    <img src={require("../assets/img/46.png")} alt="share" />
                    <img src={require("../assets/img/47.png")} alt="likes" />
                    <img src={require("../assets/img/48.png")} alt="comments" />
                  </div>
                </div>
              </article>
            </figure>
          </article>
          <article></article>
        </section>
      </FadeIn>
    </>
  );
};

export default ProductList;
