import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Login, Entry } from "./pages";
import { DataProvider } from "./context";
import ProtectedRoute from "./routes";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
          <Route index element={<Home />}></Route>
          <Route path="/entry" element={<Entry />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<h1>Uh Oh...</h1>}></Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
