// investorDetails.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";

// const baseUrl = api?.defaults.baseURL;

// Define a service using a base URL and expected endpoints
export const depositRequest = createApi({
  reducerPath: "depositRequest",
  baseQuery: baseQuery,
  tagTypes: ["getDepositRequest", "getDepositHistory"],
  endpoints: (builder) => ({
    getDepositRequest: builder.query({
      query: () => `/deposit/admin/pending-requests`,
      providesTags: ["getDepositRequest"],
    }),

    getDepositRequestById: builder.query({
      query: (id) => `/deposit/admin/getById/${id}`,
    }),

    updateDepositRequest: builder.mutation({
      query: ({ id, data }) => ({
        url: `/deposit/admin/approved/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getDepositRequest", "getDepositHistory"],
    }),

    depositReject: builder.mutation({
      query: ({ id, data }) => ({
        url: `/deposit/admin/rejected/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getDepositRequest", "getDepositHistory"],
    }),

    getDepositHistory: builder.query({
      query: () => `/deposit/admin/history`,
      providesTags: ["getDepositHistory"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetDepositRequestQuery,
  useGetDepositRequestByIdQuery,
  useUpdateDepositRequestMutation,
  useDepositRejectMutation,
  useGetDepositHistoryQuery,
} = depositRequest;
