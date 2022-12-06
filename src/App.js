import "./App.css";
import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
const Index = lazy(() => import("./components/indexComponent.js"));
const Dashboard = lazy(() => import("./components/dashboardComponent.js"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
