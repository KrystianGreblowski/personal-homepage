import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "../theme/themeSlice";
import { watchThemeStateChange } from "../theme/themeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    themeMode: themeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(watchThemeStateChange);

export default store;
