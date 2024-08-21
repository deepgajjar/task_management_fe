import { baseApi } from "../baseApi";

export const userAuth = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: "/user/create",
        method: "POST",
        body,
      }),
      // invalidatesTags: ['UserAuth'],
    }),
    // Login Authentication
    loginAuth: builder.mutation({
      query: (body) => ({
        url: "/user/signin",
        method: "POST",
        body,
      }),
      // invalidatesTags: ['UserAuth'],
    }),

    // Logout User
    //   logoutUser: builder.mutation({
    //     query: () => ({
    //       url: '/logout',
    //       method: 'PATCH',
    //     }),
    //   }),

    // Get Login User Info
    //   getLoginUserInfo: builder.query({
    //     query: () => ({
    //       url: '/user/me',
    //       method: 'GET',
    //     }),
    //     providesTags: ['UserAuth', 'Employee'],
    //   }),
  }),
  overrideExisting: false,
});

export const { useLoginAuthMutation, useCreateUserMutation } = userAuth;
