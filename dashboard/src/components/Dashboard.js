import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Summary = lazy(() => import("./Summary"));
const Orders = lazy(() => import("./Orders"));
const Holdings = lazy(() => import("./Holdings"));
const Positions = lazy(() => import("./Positions"));
const Funds = lazy(() => import("./Funds"));
const Apps = lazy(() => import("./Apps"));

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Suspense fallback={<div>Loading section...</div>}>
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
