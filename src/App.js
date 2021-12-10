import React from "react";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Poem1 from "./components/Poem1";
import Poem2 from "./components/Poem2";
import Poem3 from "./components/Poem3";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>}>
          </Route>
          <Route path={"/poem1"} element={<Poem1/>}> </Route>
          <Route path={"/poem2"} element={<Poem2/>}> </Route>
          <Route path={"/poem3"} element={<Poem3/>}> </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
