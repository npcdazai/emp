// investmentType.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";

// const baseUrl = api?.defaults.baseURL;

// Define a service using a base URL and expected endpoints
export const investmentType = createApi({
  reducerPath: "investmentType",
  baseQuery: baseQuery,
  tagTypes: ["getInvestmentType", "getInvestmentTypeID"],
  endpoints: (builder) => ({
    
    // ========[Get All]=========

    getInvestmentTypes: builder.query({
      query: ({ page, size }) =>
        `/investmentType/admin?page=${page}&size=${size}`,
      providesTags: ["getInvestmentType"],
    }),

    // ========[Get ID]=========

    getInvestmentTypeById: builder.query({
      query: (id) => `/investmentType/admin/${id}`,
      providesTags: ["getInvestmentTypeID"],
    }),

    // ========[Create Investment]========

    createInvestmentType: builder.mutation({
      query: (data) => ({
        url: `/investmentType/admin/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getInvestmentType"],
    }),

    // ========[Update Investment]=======

    updateInvestmentType: builder.mutation({
      query: ({ data, id }) => ({
        url: `/investmentType/admin/${id}`, 
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getInvestmentTypeID", "getInvestmentType"],
    }),

    // ========[Delete Investment]=======

    deleteInvestmentType: builder.mutation({
      query: (id) => ({
        url: `/investmentType/admin/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getInvestmentType"],
    }),

  }),
});

// Export hooks for usage in functional components
export const {
  useGetInvestmentTypesQuery,
  useGetInvestmentTypeByIdQuery,
  useCreateInvestmentTypeMutation,
  useUpdateInvestmentTypeMutation,
  useDeleteInvestmentTypeMutation,
} = investmentType;
