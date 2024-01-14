import { takeEvery, select, call } from "redux-saga/effects";
import { isDarkTheme, themeButtonPositionState } from "./themeSlice";
import {
  saveDarkThemeStateInLocalStorage,
  saveThemeButtonPositionInLocalStorage,
} from "./themeLocalStorage";

function* saveDarkThemeStateInLocalStorageHandler() {
  const themeState = yield select(isDarkTheme);
  const themeButtonPosition = yield select(themeButtonPositionState);

  yield call(saveDarkThemeStateInLocalStorage, themeState);
  yield call(saveThemeButtonPositionInLocalStorage, themeButtonPosition);
}

export function* watchThemeStateChange() {
  yield takeEvery("*", saveDarkThemeStateInLocalStorageHandler);
}
