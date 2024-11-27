import React from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import RoutesContainer from "./utils/RoutesContainer";

const App = () => {
  const { search, pathname } = useLocation();
  const category_name = search.split("=")[1];
  console.log(pathname, category_name);

  return (
    <div className="w-full relative">
      {category_name != undefined && (
        <div className="absolute py-2 flex justify-center z-10 w-full bg-slate-100">
          <Link
            to="/"
            className="rounded shadow-sm text-sm font-semibold bg-orange-100 px-3 py-1"
          >
            Home
          </Link>
        </div>
      )}
      <div className={`${category_name != undefined && "pt-10"} flex h-screen overflow-hidden`}>
        <RoutesContainer />
      </div>
    </div>
  );
};

export default App;
