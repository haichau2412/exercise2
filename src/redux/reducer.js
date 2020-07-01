import actions from "./actions";

let id = 3;

const newId = () => {
  id++;
  return id;
};
const initialState = {
  profile: [
    { name: "default", id: 0, configurable: false },
    { name: "game", id: 1, configurable: false },
    { name: "movie", id: 2, configurable: false },
    { name: "music", id: 3, configurable: false },
  ],
  selectedProfile: { id: 0, index: 0 },
};

const createProfile = () => ({
  name: "New Profile",
  id: newId(),
  configurable: true,
});

const createCloneArray = (array) => {
  return array.map((item) => ({ ...item }));
};

const deleteItemAtIndex = (array, index) => {
  createCloneArray(array);
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

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
      const { index, id } = action.payload;
      let cloneProfile = createCloneArray(state.profile);
      if (cloneProfile[index].id === id && cloneProfile[index].configurable) {
        cloneProfile = deleteItemAtIndex(cloneProfile, index);
        return {
          profile: cloneProfile,
          selectedProfile: { index: index - 1, id: cloneProfile[index - 1].id },
        };
      }
      return state;
    }
    case actions.rename: {
      const { name, index, id } = action.payload;
      let cloneProfile = createCloneArray(state.profile);
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
      const { index, id } = action.payload;
      let cloneProfile = createCloneArray(state.profile);
      if (cloneProfile[index].id === id && index !== 0) {
        let temp = cloneProfile[index - 1];
        cloneProfile[index - 1] = cloneProfile[index];
        cloneProfile[index] = temp;
        return {
          profile: cloneProfile,
          selectedProfile: { index: index - 1, id },
        };
      }
      return state;
    }
    case actions.moveDown: {
      const { index, id } = action.payload;
      let cloneProfile = createCloneArray(state.profile);
      if (cloneProfile[index].id === id && index !== cloneProfile.length - 1) {
        let temp = cloneProfile[index];
        cloneProfile[index] = cloneProfile[index + 1];
        cloneProfile[index + 1] = temp;

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
