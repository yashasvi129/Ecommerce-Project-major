import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div style={{
        backgroundImage: `linear-gradient(rgba(255, 222, 233,0.5), 
        rgba(181, 255, 252,0.5)), url('/images/backs.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "-70px",
      }}>
      
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-2 mt-3 mb-2 gx-3 gy-3" key={c._id}>
              <div className="card">
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Categories;