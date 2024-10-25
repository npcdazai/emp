// investorDetails.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";

// const baseUrl = api?.defaults.baseURL;

// Define a service using a base URL and expected endpoints
export const investorDetails = createApi({
  reducerPath: "investorDetails",
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({

    getInvestors: builder.query({
      query: ({ page, size }) =>
        `/investorDetails/admin?page=${page}&size=${size}`,
      providesTags: ["getInvestors"],
    }),


        // =====[get investment details ]
        getInvestorsDetailsById: builder.query({
          query: (id) => `/investorDetails/admin/${id}`,
          providesTags: ["getInvestors"],
        }),
    
    
  }),
});

// Export hooks for usage in functional components
export const { useGetInvestorsQuery, useGetInvestorsDetailsByIdQuery } = investorDetails;
