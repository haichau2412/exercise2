import actions from "./actions";
import { v4 } from "uuid";

const initialState = {
  profile: [
    { name: "default", id: v4(), configurable: false },
    { name: "game", id: v4(), configurable: false },
    { name: "movie", id: v4(), configurable: false },
    { name: "music", id: v4(), configurable: false },
  ],
};
const { name, id } = initialState.profile[0];
initialState.selectedProfile = { name, id, index: 0 };

const createProfile = () => ({
  name: "New Profile",
  id: v4(),
  configurable: true,
});

const createCloneArray = (array) => {
  return array.map((item) => ({ ...item }));
};

const deleteItemAtIndex = (array, index) => {
  const cloneArray = createCloneArray(array);
  return [...cloneArray.slice(0, index), ...array.slice(index + 1)];
};

const moveItemAtIndexUp = (array, index) => {
  const cloneArray = createCloneArray(array);
  let temp = cloneArray[index - 1];
  cloneArray[index - 1] = cloneArray[index];
  cloneArray[index] = temp;
  return cloneArray;
};

const moveItemAtIndexDown = (array, index) => {
  const cloneArray = createCloneArray(array);
  let temp = cloneArray[index];
  cloneArray[index] = cloneArray[index + 1];
  cloneArray[index + 1] = temp;
  return cloneArray;
};

// const swapLocation = (array,index)

// const deleteItemWithId = (array, id) => {
//   return array.reduce((result, item) => {
//     if (item.id === id) {
//       result.push({ ...item });
//     }
//     return result;
//   }, []);
// };
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
