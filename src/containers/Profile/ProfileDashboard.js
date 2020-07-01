import React, { useCallback, useMemo } from "react";
import styles from "../../assets/css/Profile.module.css";
import Panel from "../../components/Profile/Panel";
import Toolbar from "../../components/Profile/Toolbar";
import Alert from "../../components/Profile/Alert";
import { useSelector, useDispatch } from "react-redux";
import { AlterationContextProvider } from "../../components/Profile/AlterationProvider";

const mapStateToProps = (state) => ({
  profile: state.profile,
  selectedProfile: state.selectedProfile,
});

const ProfileDashboard = () => {
  const { profile, selectedProfile } = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  const selectItem = useCallback(
    (index, id) => {
      dispatch({ type: "SELECT", payload: { index, id } });
    },
    [dispatch]
  );

  const actions = useMemo(() => {
    const { index, id } = selectedProfile;
    return {
      add: () => dispatch({ type: "ADD" }),
      moveUp: () => dispatch({ type: "MOVE_UP", payload: { index, id } }),
      moveDown: () => dispatch({ type: "MOVE_DOWN", payload: { index, id } }),
    };
  }, [dispatch, selectedProfile]);

  return (
    <div className={`${styles["thx-drawer"]} flex`}>
      <div className='main-title'>Profile List</div>
      <div className={`${styles["drawer-select"]} flex`}>
        <AlterationContextProvider>
          <Panel
            profile={profile}
            selectItem={selectItem}
            selectedProfile={selectedProfile}
          />
          <Toolbar
            {...actions}
            configurable={profile[selectedProfile.index].configurable}
          />
          <Alert />
        </AlterationContextProvider>
      </div>
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   select: (index, id) => {
//     dispatch({
//       type: actions.select,
//       payload: {
//         index,
//         id,
//       },
//     });
//   },
//   add: () => dispatch({ type: actions.add }),
//   delete: (index, id) =>
//     dispatch({ type: actions.delete, payload: { index, id } }),
//   rename: (name, index, id) =>
//     dispatch({ type: actions.rename, payload: { name, index, id } }),
//   moveUp: (index, id) =>
//     dispatch({ type: actions.moveUp, payload: { index, id } }),
//   moveDown: (index, id) =>
//     dispatch({ type: actions.moveDown, payload: { index, id } }),
// });

export default ProfileDashboard;
