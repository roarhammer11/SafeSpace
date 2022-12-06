import "./App.css";
import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Index from "./components/indexComponent.js";
// import Page2 from "./components/page2Component.js";
const Index = lazy(() => import("./components/indexComponent.js"));
const Page2 = lazy(() => import("./components/page2Component.js"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
