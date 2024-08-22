import { baseApi } from "../baseApi";

export const userAuth = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAssignedTickets: builder.query({
      query: () => ({
        url: "/ticket/get-assgined-tickets",
        method: "GET",
      }),
      providesTags: ["GET_ASSIGNED_TICKETS"],
    }),
    getAllTickets: builder.query({
      query: () => ({
        url: "/ticket/getAll",
        method: "GET",
      }),
      providesTags: ["GET_ALL_TICKETS"],
    }),

    createTicket: builder.mutation({
      query: (body) => ({
        url: "/ticket/create",
        method: "POST",
        body,
      }),
      // invalidatesTags: ["GET_ASSIGNED_TICKETS", "GET_ALL_TICKETS"],
    }),
    updateTicket: builder.mutation({
      query: ({ body, id }) => ({
        url: `/ticket/update/${id}`,
        method: "PUT",
        body,
      }),
      // invalidatesTags: ["GET_ASSIGNED_TICKETS", "GET_ALL_TICKETS"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useLazyGetAssignedTicketsQuery,
  useCreateTicketMutation,
  useUpdateTicketMutation,
  useLazyGetAllTicketsQuery
} = userAuth;
