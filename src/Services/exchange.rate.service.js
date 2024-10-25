// exchangeRate.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";

// const baseUrl = api?.defaults.baseURL;

// Define a service using a base URL and expected endpoints
export const exchangeRate = createApi({
  reducerPath: "exchangeRate",
  baseQuery: baseQuery,
  tagTypes: ["getAllExchangeRate", "getExchangeById"],

  endpoints: (builder) => ({
    getAllExchangeRates: builder.query({
      query: ({ page, size }) =>
        `/currencyExchange/admin?page=${page}&size=${size}`,
      providesTags: ["getAllExchangeRate"],
    }),

    getExchangeRateById: builder.query({
      query: (id) => `/currencyExchange/admin/${id}`,
      providesTags: ["getAllExchangeRate"],
    }),

    updateExchangeRate: builder.mutation({
      query: ({ data, id }) => ({
        url: `/currencyExchange/admin/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getAllExchangeRate"],
    }),

    getCurrencyHistoryById: builder.query({
      query: (id) => `/currencyExchange/admin/history/${id}`,
      providesTags: ["getAllExchangeRate"],
    }),



  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllExchangeRatesQuery,
  useGetExchangeRateByIdQuery,
  useUpdateExchangeRateMutation,
  useGetCurrencyHistoryByIdQuery,
} = exchangeRate;
