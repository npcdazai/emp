// investorDetails.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";

// const baseUrl = api?.defaults.baseURL;

// Define a service using a base URL and expected endpoints
export const bankDetails = createApi({
  reducerPath: "bankDetails",
  baseQuery: baseQuery,
  tagTypes: ["getBank"],
  
  endpoints: (builder) => ({

    getBank: builder.query({
      query: ({ page, size }) =>
        `/bankDetails/admin/?page=${page}&size=${size}`,
      providesTags: ["getBank"],
    }),

    // ========[Update Sponser]========

    updateBankDetails: builder.mutation({
      query: ({ data, id }) => ({
        url: `/bankDetails/admin/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getBank"],
    }),
    
  }),
});

// Export hooks for usage in functional components
export const { useGetBankQuery,useUpdateBankDetailsMutation } = bankDetails;
