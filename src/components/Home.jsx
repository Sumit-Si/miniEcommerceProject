import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { ProductContextData } from "../utils/ProductContext";
import Loading from "./Loading";
import axios from "../utils/axiosSetting";

const Home = () => {
  const { search, pathname } = useLocation();
  const category_name = search.split("=")[1];
  const [products] = useContext(ProductContextData);
  const [prodCatData, setProdCatData] = useState(null);

  const productByCategoryData = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category_name}`);
      setProdCatData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!category_name || category_name === "undefined") {
      setProdCatData(products); // Default to products if no category name
    } else {
      productByCategoryData(); // Fetch data by category
    }
  }, [category_name, products]); // Trigger re-fetch when either category_name or products change

  return (
    <>
      <Navbar />
      <div
        className="h-screen overflow-y-scroll"
        style={{ width: "calc(100% - 18%)" }}
      >
        <div className="flex p-5 gap-6 flex-wrap justify-center items-start">
          {prodCatData ? (
            prodCatData.map((product, index) => (
              <Link
                key={product.id}
                to={`/details/${product.id}`}
                className="bg-slate-100 shrink-0 rounded shadow-md w-60 overflow-hidden"
              >
                <img
                  className="h-64 p-3 outline-none hover:scale-105 bg-gray-200 w-full object-fill"
                  src={product.image}
                  alt="img"
                />
                <div className="py-2 px-3">
                  <h3 className="font-semibold leading-5 mb-3">
                    {product.title}
                  </h3>
                  <h5 className="text-green-600 font-semibold">
                    ${product.price}
                  </h5>
                </div>
              </Link>
            ))
          ) : (
            <Loading /> // Optionally show a loading spinner if prodCatData is not yet set
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
