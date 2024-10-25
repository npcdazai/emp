// io.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";

// const baseUrl = api?.defaults.baseURL;

export const ioService = createApi({
  reducerPath: "ioService",
  baseQuery: baseQuery,
  tagTypes: ["getInvestmentDocuments"],



  endpoints: (builder) => ({
    // =====[get]
    getInvestmentDocuments: builder.query({
      query: ({id}) => `/io/admin/document/${id}`,
      providesTags: ["getInvestmentDocuments"],
    }),


    
    
    

    // =====[create]
    createInvestmentDocuments: builder.mutation({
      query: ({data, id}) => ({
        url: `/io/admin/document/${id}`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["getInvestmentDocuments"],
    }),

    

    updateIO: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getInvestmentDocuments"],
    }),






  }),
});

// Export hooks for usage in functional components
export const { 
    useCreateInvestmentDocumentsMutation,
} =
  ioService;
