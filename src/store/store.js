import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import flagSlice from "./slices/flagSlice";
import { baseApi } from "./baseApi";

const globalErrorHandlerMiddleware = () => (next) => async (action) => {
  if (isRejectedWithValue(action)) {
      if (action.payload.status === 401 || action.payload.status === 403) {
        window.localStorage.removeItem("token")
        window.location.reload();
      }
  }
  return next(action);
};

export default configureStore({
  reducer: {
    flags:flagSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      globalErrorHandlerMiddleware,
      baseApi.middleware
    ),
});
