import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import * as storageModule from "redux-persist/lib/storage";

console.log(storageModule);

import { rootReducer } from "./root-reducer";

const logger = createLogger();

const storage =
  storageModule.default?.default ?? storageModule.default ?? storageModule;

console.log(storage);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
    });

    return import.meta.env.MODE !== "production"
      ? middleware.concat(logger)
      : middleware;
  },
});

export const persistor = persistStore(store);
