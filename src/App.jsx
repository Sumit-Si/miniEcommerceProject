import React from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import RoutesContainer from "./utils/RoutesContainer";

const App = () => {
  const { search, pathname } = useLocation();
  const category_name = search.split("=")[1];
  console.log(pathname, category_name);

  return (
    <div className="h-screen w-full flex relative">
      {(category_name != undefined) && (
        <Link
          to="/"
          className="absolute left-1/4 my-2 rounded shadow-sm font-semibold bg-orange-100 px-3 py-1"
        >
          Home
        </Link>
      )}

      <RoutesContainer />
    </div>
  );
};

export default App;
