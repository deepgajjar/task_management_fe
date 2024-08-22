import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  prepareHeaders: (headers) => {
    //   headers.set('WebLocation', window.location.href);
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "taskManagementApi",
  baseQuery,
  tagTypes: [
    "GET_ASSIGNED_TICKETS",
    "GET_USER_LISTS",
    "GET_ALL_TICKETS",
    "GET_USER_INFO",
  ],
  endpoints: () => ({}),
});
