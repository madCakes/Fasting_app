import React from "react";
import { Routes, Route } from "react-router-dom";

import * as Pages from "./pages";
import { DataProvider } from "./context";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route index element={<Pages.Login />}></Route>
        <Route path="/home" element={<Pages.Home />}></Route>
        <Route path="/entry" element={<Pages.Entry />}></Route>
        <Route path="*" element={<h1>Uh Oh...</h1>}></Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
