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

export const createProfile = () => ({
  name: "New Profile",
  id: v4(),
  configurable: true,
});

export const createCloneArray = (array) => {
  return array.map((item) => ({ ...item }));
};

export const deleteItemAtIndex = (array, index) => {
  const cloneArray = createCloneArray(array);
  return [...cloneArray.slice(0, index), ...array.slice(index + 1)];
};

export const moveItemAtIndexUp = (array, index) => {
  const cloneArray = createCloneArray(array);
  let temp = cloneArray[index - 1];
  cloneArray[index - 1] = cloneArray[index];
  cloneArray[index] = temp;
  return cloneArray;
};

export const moveItemAtIndexDown = (array, index) => {
  const cloneArray = createCloneArray(array);
  let temp = cloneArray[index];
  cloneArray[index] = cloneArray[index + 1];
  cloneArray[index + 1] = temp;
  return cloneArray;
};

export { initialState };
