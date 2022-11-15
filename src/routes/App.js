import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { EditPage } from "./edit/EditPage";
import { HomePage } from "./home/HomePage";
import { NewPage } from "./new/NewPage";

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/new" element={<NewPage/>} />
        <Route path="/edit/:id" element={<EditPage/>} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  );
}


export default App;
