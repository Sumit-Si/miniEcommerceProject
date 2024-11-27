import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContextData } from "../utils/ProductContext";

const Navbar = () => {
  const [products] = useContext(ProductContextData);

  const filteredProduct =
    products &&
    products.reduce((acc, curr) => {
      return [...acc, curr.category];
    }, []);

  const filteredCategories = filteredProduct && [...new Set(filteredProduct)];

  function dynaBgColor() {
    return ((Math.random() * 255).toFixed(),(Math.random() * 255).toFixed(),(Math.random() * 255).toFixed(),0.6);
  }

  return (
    <nav className="bg-zinc-200 w-[18%] p-5 pt-10 text-center h-full">
      <Link
        to="/create"
        className="py-2 px-6 bg-blue-500 text-white rounded-md shadow-md shadow-blue-200 hover:bg-blue-600"
      >
        Add New Product
      </Link>
      <div className="mt-10">
        <h3 className="font-semibold text-2xl mb-1.5">Categories</h3>
        <div className="bg-blue-50 rounded py-2 px-3 flex flex-col gap-1">
          {products && filteredCategories.map((category,index) => (
            <Link to={`/?category=${category}`} key={index} className="font-semibold text-md rounded hover:bg-blue-100 flex gap-2 py-1 px-2">
              <span style={{backgroundColor: `rgba(${dynaBgColor()})`}} className="rounded px-3 py-1 text-xs"></span>{category}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
