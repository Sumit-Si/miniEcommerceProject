import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axiosSetting";
import Loading from "./Loading";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  async function singleProductData() {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    singleProductData();
  }, []);

  return product ? (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-slate-100 rounded w-[80%] h-[70%] flex shadow-md overflow-hidden">
        <img
          className="h-full outline-none shrink-0 bg-gray-200 w-5/12 p-3"
          src={product.image}
          alt="img"
        />
        <div className="py-5 px-3">
          <h3 className="font-semibold text-2xl mb-2">{product.title}</h3>
          <h5 className="mb-3 py-1 px-5 rounded-full bg-amber-300 w-fit">{product.category}</h5>
          <h5 className="text-gray-800 mb-4">
            {product.description}
          </h5>
          <h5 className="text-green-600 text-lg font-bold">${product.price}</h5>
          <div className="flex gap-2 mt-4">
            <Link className="py-2 px-6 rounded hover:bg-blue-500 shadow-md shadow-blue-200 bg-blue-400 text-white">
              Edit
            </Link>
            <Link className="py-2 px-6 rounded hover:bg-red-500 shadow-md shadow-red-200 bg-red-400 text-white">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading/>
  )
};

export default Details;
