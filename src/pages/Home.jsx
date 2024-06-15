import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Forming from "./Form.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/app" element={<App/>} />
      <Route path="/sign" element={<Forming />} />
    </Route>
  )
);

function Home() {
  return (
    
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Home;