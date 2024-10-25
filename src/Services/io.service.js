// io.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";

// const baseUrl = api?.defaults.baseURL;
// Define a service using a base URL and expected endpoints
export const ioService = createApi({
  reducerPath: "ioService",
  baseQuery: baseQuery,
  tagTypes: [
    "prePopulate",
    "getIO",
    "getKeyMerits",
    "getArtifactsVideo",
    "getInvestmentDocuments",
    "getIOById",
  ],
  endpoints: (builder) => ({
    // =====[get prepopulate data]
    getIOprepopulateData: builder.query({
      query: () => `/io/admin/pre-populate`,
      providesTags: ["prePopulate"],
    }),

    // =====[get]
    getIOs: builder.query({
      query: ({ page, size }) => `/io/admin?page=${page}&size=${size}`,
      providesTags: ["getIO"],
    }),

    getIOById: builder.query({
      query: (id) => ({ url: `/io/admin/${id}` }),
      providesTags: ["getIOById"],
    }),

    // =====[create]
    createIO: builder.mutation({
      query: (data) => ({
        url: `/io/admin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getIO"],
    }),

    updateIO: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getIOById", "getIO"],
    }),

    // =====[Key Merits]
    getKeyMerits: builder.query({
      query: (id) => `/io/admin/key-merits/${id}`,
      providesTags: ["getKeyMerits"],
    }),

    createKeyMerits: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/key-merits/${id}`,
        method: "POST",
        body: data,
        // No need to manually set 'Content-Type'
      }),
      invalidatesTags: ["getIOById"],
    }),

    deleteKeyMerits: builder.mutation({
      query: (id) => ({
        url: `/io/admin/key-merits/hard-delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getIOById"],
    }),

    updateKeyMerits: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/key-merits/byId/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getIOById"],
    }),

    // =====[getIODocument]
    createInvestmentDocuments: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/document/${id}`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["getIOById"],
    }),

    updateInvestmentDocuments: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/document/byId/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getIOById"],
    }),

    getInvestmentDocuments: builder.query({
      query: (id) => `/io/admin/document/${id}`,
      providesTags: ["getInvestmentDocuments"],
    }),

    deleteIODocs: builder.mutation({
      query: (id) => ({
        url: `/io/admin/document/hard-delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getIOById"],
    }),

    // =====[Artifacts]
    getArtifactsVideo: builder.query({
      query: (id) => `/io/artifact/artifactVideo/${id}`,
      providesTags: ["getArtifactsVideo"],
    }),




    // =====[createImageArtifacts]
    createImageArtifacts: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/artifact/image/${id}`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["getIOById"],
    }),




    updateImageArtifacts: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/artifact/image/byId/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getIOById"],
    }),




    // =====[createVideoArtifacts]
    createVideoArtifacts: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/artifact/video/${id}`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["getIOById"],
    }),

    deleteVideoArtifacts: builder.mutation({
      query: (id) => ({
        url: `/io/admin/artifact/video/byId/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getIOById"],
    }),

    deleteImageArtifacts: builder.mutation({
      query: (id) => ({
        url: `/io/admin/artifact/image/byId/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getIOById"],
    }),

    updateVideoArtifacts: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/artifact/video/byId/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getIOById"],
    }),

    setDisplayOrder: builder.mutation({
      query: ({ data }) => ({
        url: `/io/artifact/artifactImage/resetDisplayOrder/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getIOById"],
    }),

    updateStatusIo: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/update-status/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getIOById", 'getIO'],
    }),

    createIoCash: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/io-cash/${id}`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["getIOById"],
    }),


    createIoNav: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/io-nav/${id}`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["getIOById"],
    }),



    // =====[ Amount Investment ]
    amountIvestment : builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/amount-invested/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getIOById"],
    }),















  }),
});

// Export hooks for usage in functional components
export const {
  useGetIOprepopulateDataQuery,

  useGetIOsQuery,
  useGetIOByIdQuery,
  useCreateIOMutation,
  useUpdateIOMutation,

  useGetKeyMeritsQuery,
  useCreateKeyMeritsMutation,
  useDeleteKeyMeritsMutation,
  useUpdateKeyMeritsMutation,

  useGetInvestmentDocumentsQuery,
  useCreateInvestmentDocumentsMutation,
  useDeleteIODocsMutation,
  useUpdateInvestmentDocumentsMutation,

  useCreateImageArtifactsMutation,
  useUpdateImageArtifactsMutation,
  useUpdateVideoArtifactsMutation,

  useGetArtifactsVideoQuery,
  useCreateVideoArtifactsMutation,
  useDeleteVideoArtifactsMutation,
  useDeleteImageArtifactsMutation,
  useSetDisplayOrderMutation,


  useCreateIoCashMutation,
  useCreateIoNavMutation,



  useUpdateStatusIoMutation,





  useAmountIvestmentMutation,
} = ioService;
