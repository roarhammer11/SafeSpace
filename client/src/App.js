import "./App.css";
import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// create express app
const Index = lazy(() =>
  import("./components/view-components/indexComponent.js")
);
const Dashboard = lazy(() =>
  import("./components/view-components/dashboardComponent.js")
);
const MentalHealthProfessionals = lazy(() =>
  import("./components/view-components/mentalHealthProfessionalsComponent.js")
);
const Messages = lazy(() =>
  import("./components/view-components/messagesComponent.js")
);
const MentalDisordersFilter = lazy(() =>
  import("./components/view-components/mentalDisordersFilterComponent")
);
const Explore = lazy(() =>
  import("./components/view-components/exploreComponent")
);
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route
          path="/Dashboard/MentalHealthProfessionals"
          element={<MentalHealthProfessionals />}
        />
        <Route path="/Dashboard/Messages" element={<Messages />} />
        <Route
          path="/Dashboard/MentalDisordersFilter"
          element={<MentalDisordersFilter />}
        />
        <Route path="/Dashboard/Explore" element={<Explore />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
