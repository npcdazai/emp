// io.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";

// const baseUrl = api?.defaults.baseURL;

export const keyMerits = createApi({
  reducerPath: "ioService",
  baseQuery: baseQuery,
  tagTypes: ["getKeyMerits"],
  endpoints: (builder) => ({
    // =====[get]
    getKeyMerits: builder.query({
      query: (id) => `/io/admin/key-merits/${id}`,
      providesTags: ["getKeyMerits"],
    }),

  }),
});

// Export hooks for usage in functional components
export const { 
    useGetKeyMeritsQuery,
} =
keyMerits;
