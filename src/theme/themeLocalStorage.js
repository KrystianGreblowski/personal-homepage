const darkThemeStateKey = "darkThemeState";
const themeButtonPositionKey = "themeButtonPosition";

export const saveDarkThemeStateInLocalStorage = (darkThemeState) =>
  localStorage.setItem(darkThemeStateKey, JSON.stringify(darkThemeState));

export const getDarkThemeStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(darkThemeStateKey)) || false;

export const saveThemeButtonPositionInLocalStorage = (themeButtonPosition) => {
  localStorage.setItem(
    themeButtonPositionKey,
    JSON.stringify(themeButtonPosition)
  );
};

export const getThemeButtonPositionFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(themeButtonPositionKey)) || [0, 0];
};
