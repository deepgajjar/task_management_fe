import { baseApi } from "../baseApi";

export const userAuth = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: "/user/create",
        method: "POST",
        body,
      }),
    }),
    loginAuth: builder.mutation({
      query: (body) => ({
        url: "/user/signin",
        method: "POST",
        body,
      }),
    }),
    getUserList: builder.query({
      query: () => ({
        url: "/user/getAll",
        method: "GET",
      }),
      providesTags: ["GET_USER_LISTS"],
    }),
    getCurrentUserInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["GET_USER_INFO"],
    }),
  }),
  overrideExisting: false,
});

export const { useLoginAuthMutation, useCreateUserMutation,useLazyGetUserListQuery,useLazyGetCurrentUserInfoQuery } = userAuth;
