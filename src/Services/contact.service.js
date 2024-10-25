// investorDetails.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";

// const baseUrl = api?.defaults.baseURL;

// Define a service using a base URL and expected endpoints
export const contact = createApi({
  reducerPath: "contact",
  baseQuery: baseQuery,
  tagTypes: ["getContact"],
  endpoints: (builder) => ({

    getContact: builder.query({
      query: () =>
        `/contactDetails/admin`,
      providesTags: ["getContact"],
    }),

    
    // ========[Update Investment]=======

    updateContact: builder.mutation({
      query: (data) => ({
        url: `/contactDetails/admin/`, 
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getContact"],
    }),
    
  }),
});

// Export hooks for usage in functional components
export const { useGetContactQuery, useUpdateContactMutation } = contact;
