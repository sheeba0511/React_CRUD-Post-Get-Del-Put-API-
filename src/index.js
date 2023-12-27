import React from "react";
import ReactDOM from "react-dom/client";
import EditTeacher from "./pages/EditTeacher";
import Teacher from "./pages/Teacher";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Teacher />}></Route>
        <Route path="/editTeacher" element={<EditTeacher />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
