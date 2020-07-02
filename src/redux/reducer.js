import actions from "./actions";
import {
  initialState,
  createCloneArray,
  createProfile,
  deleteItemAtIndex,
  moveItemAtIndexUp,
  moveItemAtIndexDown,
} from "./utilities";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.add: {
      let cloneProfile = createCloneArray(state.profile);
      let newProfile = createProfile();
      return {
        profile: [...cloneProfile, newProfile],
        selectedProfile: { id: newProfile.id, index: cloneProfile.length },
      };
    }
    case actions.delete: {
      let {
        profile,
        selectedProfile: { index, id },
      } = state;
      if (profile[index].id === id && profile[index].configurable) {
        let cloneProfile = deleteItemAtIndex(profile, index);
        if (index === 0) {
          id = cloneProfile[0].id;
        } else {
          index = index - 1;
          id = cloneProfile[index].id;
        }
        return {
          profile: cloneProfile,
          selectedProfile: {
            index,
            id,
          },
        };
      }
      return state;
    }
    case actions.rename: {
      const { name } = action.payload;
      const {
        profile,
        selectedProfile: { index, id },
      } = state;
      let cloneProfile = createCloneArray(profile);
      if (cloneProfile[index].id === id && cloneProfile[index].configurable) {
        cloneProfile[index].name = name.toLowerCase().trim();
        return {
          profile: cloneProfile,
          selectedProfile: { ...state.selectedProfile },
        };
      }
      return state;
    }
    case actions.select: {
      const { index, id } = action.payload;
      let cloneProfile = createCloneArray(state.profile);
      if (cloneProfile[index].id === id) {
        return {
          profile: cloneProfile,
          selectedProfile: { index, id },
        };
      }
      return state;
    }
    case actions.moveUp: {
      const {
        profile,
        selectedProfile: { index, id },
      } = state;
      if (profile[index].id === id && index !== 0) {
        let cloneProfile = moveItemAtIndexUp(profile, index);
        return {
          profile: cloneProfile,
          selectedProfile: { index: index - 1, id },
        };
      }
      return state;
    }
    case actions.moveDown: {
      const {
        profile,
        selectedProfile: { index, id },
      } = state;
      if (profile[index].id === id && index !== profile.length - 1) {
        let cloneProfile = moveItemAtIndexDown(profile, index);
        return {
          selectedProfile: { index: index + 1, id },
          profile: cloneProfile,
        };
      }
      return state;
    }
    default:
      return state;
  }
};
export default reducer;
