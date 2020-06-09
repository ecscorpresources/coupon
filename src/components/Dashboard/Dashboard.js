import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../../css/dashboard.scss";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>dashboard</title>
        </Helmet>

        <section className="dashboard">
          <article>
            <div>
              <img
                src={require("../../assets/img/35.png")}
                alt="total upload"
              />
              <h4>Total</h4>
              <p>Product Uploaded</p>
            </div>

            <div>
              <img
                src={require("../../assets/img/36.png")}
                alt="total upload"
              />
              <h4>Total</h4>
              <p>Product Downloaded</p>
            </div>

            <div>
              <img
                src={require("../../assets/img/37.png")}
                alt="total upload"
              />
              <h4>Total</h4>
              <p>Money Made</p>
            </div>
          </article>
        </section>

        <section className="dashboardSecondSection">
          <article>
            <div className="table-title">
              <h3>Sales</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th>Product Title</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>No. of Downloads</th>
                  <th>Cash Mode</th>
                  <th>
                    <td>
                      <img
                        src={require("../../assets/img/38.png")}
                        alt="delete"
                      />
                    </td>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Set of 60 Business Icons</td>
                  <td>04/09/19</td>
                  <td>Graphics & Vectors</td>
                  <td>$35</td>
                  <td>56</td>
                  <td>$1,750</td>
                  <td>
                    <TableLink>Edit Product</TableLink>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Set of 60 Business Icons</td>
                  <td>04/09/19</td>
                  <td>Graphics & Vectors</td>
                  <td>$35</td>
                  <td>56</td>
                  <td>$1,750</td>
                  <td>
                    <TableLink>Edit Product</TableLink>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Set of 60 Business Icons</td>
                  <td>04/09/19</td>
                  <td>Graphics & Vectors</td>
                  <td>$35</td>
                  <td>56</td>
                  <td>$1,750</td>
                  <td>
                    <TableLink>Rate Product</TableLink>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="table-title">
              <h3>Purchases</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th>Product Title</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>No. of Downloads</th>
                  <th>Cash Mode</th>
                  <th>
                    <td>
                      <img
                        src={require("../../assets/img/38.png")}
                        alt="delete"
                      />
                    </td>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Set of 60 Business Icons</td>
                  <td>04/09/19</td>
                  <td>Graphics & Vectors</td>
                  <td>$35</td>
                  <td>56</td>
                  <td>$1,750</td>
                  <td>
                    <TableLink>Rate Product</TableLink>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Set of 60 Business Icons</td>
                  <td>04/09/19</td>
                  <td>Graphics & Vectors</td>
                  <td>$35</td>
                  <td>56</td>
                  <td>$1,750</td>
                  <td>
                    <TableLink>Rate Product</TableLink>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Set of 60 Business Icons</td>
                  <td>04/09/19</td>
                  <td>Graphics & Vectors</td>
                  <td>$35</td>
                  <td>56</td>
                  <td>$1,750</td>
                  <td>
                    <TableLink>Edit Product</TableLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article>
            {/* there should be a form around the whole page */}
            <Link to="/upload" type="submit">
              Upload Product
            </Link>
          </article>
        </section>
      </FadeIn>
    </>
  );
};

const TableLink = styled(Link)`
  color: #fff;
  background-color: #094a6a;
  border: none;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  padding: 1px 15px;
  font-family: "Open Sans", sans-serif;
  border-radius: 4px;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;
export default Dashboard;
