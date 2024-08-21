import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import { baseApi } from "./baseApi";

const globalErrorHandlerMiddleware = () => (next) => async (action) => {
  if (isRejectedWithValue(action)) {
      if (action.payload.status === 401 || action.payload.status === 403) {
        window.localStorage.removeItem("token")
        // ShowNotification(action.payload.message, 'error');
        window.location.reload();
      }
  }
  return next(action);
};

export default configureStore({
  reducer: {
    counter: counterSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      globalErrorHandlerMiddleware,
      baseApi.middleware
    ),
});
