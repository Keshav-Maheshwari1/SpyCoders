import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./constants/Path";

import Clerk from "./keshavDirectory/Clerk";


const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full grid place-items-center ">      
          <Clerk />
          <AppRoutes />
        
      </div>
    </BrowserRouter>
  );
};

export default App;
