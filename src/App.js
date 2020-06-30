import React from "react";
import ProfileDetail from "./containers/ProfileDetail";
import ProfileDashboard from "./containers/ProfileDashboard";

const App = () => {
  return (
    <div className='main-container'>
      <div className='thx-wrapper flex'>
        <ProfileDashboard />
        <ProfileDetail />
      </div>
    </div>
  );
};

export default App;
