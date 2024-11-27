import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { ProductContextData } from "../utils/ProductContext";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [products,setProducts] = useContext(ProductContextData);
    console.log(products);
    const navigate = useNavigate();

    const [image,setImage] = useState("");
    const [title,setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");

    function handleSubmitHandler(e) {
        e.preventDefault();
        const product = {
            id: nanoid(),
            title,
            image,
            category,
            price,
            description
        }

        if(title.trim() != "" || image.trim() != "" || category.trim() != "" || price.trim() != "" || description.trim() != "" ) {
            const updatedProducts = [...products, product];
            setProducts(updatedProducts);
            localStorage.setItem("products", JSON.stringify(updatedProducts));
            navigate("/");
        } else {
            return;
        }
    }

  return (
    <div className="h-screen bg-zinc-100 flex justify-center items-start py-5 w-full">
      <form onSubmit={handleSubmitHandler} className="bg-slate-200 w-[60%] py-5 px-5 rounded-lg" action="">
        <h3 className="text-2xl font-semibold mb-3">Add New Product</h3>
        <div className="flex gap-3 flex-col">
          <input
            className="rounded border-none outline-none ring-2 ring-slate-200 focus:ring-blue-300 w-full py-2 px-3 shadow-sm"
            type="url"
            name=""
            placeholder="Enter url"
            id=""
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <input
            className="rounded border-none outline-none ring-2 ring-slate-200 focus:ring-blue-300 w-full py-2 px-3 shadow-sm"
            type="text"
            name=""
            placeholder="Enter title"
            id=""
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <div className="flex gap-2">
            <input
              className="rounded border-none outline-none ring-2 ring-slate-200 focus:ring-blue-300 w-full py-2 px-3 shadow-sm"
              type="text"
              name=""
              placeholder="Enter category"
              id=""
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <input
              className="rounded border-none outline-none ring-2 ring-slate-200 focus:ring-blue-300 w-full py-2 px-3 shadow-sm"
              type="number"
              name=""
              placeholder="Enter price"
              id=""
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>

          <textarea
            className="rounded border-none outline-none ring-2 ring-slate-200 focus:ring-blue-300 w-full py-2 px-3 shadow-sm"
            name=""
            placeholder="Enter product description"
            id=""
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>

          <button type="submit" className="py-2 px-5 rounded-lg bg-blue-500 w-fit mx-auto text-white shadow-md shadow-blue-300 hover:bg-blue-400">Add New</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
