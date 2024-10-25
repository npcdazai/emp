// investorTransaction.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./token.serivce";

// const baseUrl = import.meta.env.VITE_API_BASE_URL + "/api";

// Define a service using a base URL and expected endpoints
export const investorTransaction = createApi({
  reducerPath: "investorTransaction",
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => '/getTransactions',
    }),
    getTransactionById: builder.query({
      query: (id) => `/getTransaction/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetTransactionsQuery, useGetTransactionByIdQuery } = investorTransaction;
