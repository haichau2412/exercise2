import React from "react";
import { useSelector } from "react-redux";

const mapStateToProps = (state) =>
  state.profile[state.selectedProfile.index].name;

const ProfileDetail = () => {
  const name = useSelector(mapStateToProps);
  return (
    <div className='thx-window'>
      <div className='sub-title flex'>
        <h1 id='eqTitle' className='eq-title'>
          {name}
        </h1>
      </div>
    </div>
  );
};

export default ProfileDetail;
