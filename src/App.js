import React from "react";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Poem1 from "./components/Poem1";
import Poem2 from "./components/Poem2";
import Poem3 from "./components/Poem3";
import Poem4 from "./components/Poem4";
import Poem5 from "./components/Poem5";
import ArsPoetica from "./components/ArsPoetica";
import WorksCited from "./components/WorksCited";
import Dynamic from "./components/Dynamic";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dynamic/>}>
          </Route>
          <Route path={"/threading"} element={<Poem1/>}> </Route>
          <Route path={"/rabbit"} element={<Poem2/>}> </Route>
          <Route path={"/alanguage"} element={<Poem3/>}> </Route>
          <Route path={"/sentience"} element={<Poem4/>}> </Route>
          <Route path={"/poem-program"} element={<Poem5/>}> </Route>

          <Route path={"/arspoetica"} element={<ArsPoetica/>}> </Route>
          <Route path={"/workscited"} element={<WorksCited/>}> </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
