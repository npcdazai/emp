//sponser.service
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";
import { ioService } from "./io.service";

// const baseUrl = api?.defaults.baseURL;



// const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/${import.meta.env.VITE_API_VERSION}`



// Define a service using a base URL and expected endpoints
export const sponserMaster = createApi({
  reducerPath: "sponserMaster",
  baseQuery: baseQuery,
  tagTypes: ["getSponser", "prePopulate"],
  endpoints: (builder) => ({



    // ======[Get All]=====

    getSponserMaster: builder.query({
      query: ({ page, size }) => `/sponsor/admin?page=${page}&size=${size}`,
      providesTags: ["getSponser"],
    }),


    // ========[Get Active]========

    getActiveSponserMaster: builder.query({
      query: () => `/sponsor/admin/active`,
    }),

    getSponserMasterActive: builder.query({
      query: () => "/sponsor/admin/active",
    }),
    

    // ======[Get ID]=====

    getSponserById: builder.query({
      query: (id) => `/sponsor/admin/${id}`,
    }),

    // ========[Toggle Status]========

    toggleStatus: builder.mutation({
      query: ({ id }) => ({
        url: `/sponsor/admin/toggle-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["getSponser"],
    }),

    // ========[Create Sponser]========

    createSponser: builder.mutation({
      query: (data) => ({
        url: `/sponsor/admin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getSponser","prePopulate"],
    }),

    // ========[Update Sponser]========

    updateSponser: builder.mutation({
      query: ({ data, id }) => ({
        url: `/sponsor/admin/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getSponser"],
    }),

    // ========[Delete Sponser]========

    deleteSponser: builder.mutation({
      query: (id) => ({
        url: `/sponsor/admin/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getSponser"],
    }),

  }),
});

// Export hooks for usage in functional components
export const {
  useGetSponserMasterQuery,
  useGetSponserMasterActiveQuery,
  useToggleStatusMutation,
  useCreateSponserMutation,
  useUpdateSponserMutation,
  useGetSponserByIdQuery,
  useDeleteSponserMutation,
  useGetActiveSponserMasterQuery
} = sponserMaster;
