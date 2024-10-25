import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a base query function with RTK Query
// export const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://sprint4.tanami.betadelivery.com/api/v1',
//   prepareHeaders: (headers) => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       headers.set('x-auth-token', `${token}`);
//     }
//     return headers;
//   },
// });




// Define a base query function with token refresh logic
export const  baseQuery = async (args, api, extraOptions) => {
  let result = await fetchBaseQuery({
    baseUrl: 'https://sprint4.tanami.betadelivery.com/api/v1',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('x-auth-token', token);
      }
      return headers;
    },
  })(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Handle token refresh
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        const refreshResult = await fetchBaseQuery({
          baseUrl: 'https://sprint4.tanami.betadelivery.com/api/v1',
        })({
          url: '/auth/user/regenerate-token',
          method: 'POST',
          body: { refreshToken },
        }, api, extraOptions);

        if (refreshResult.data) {
          
          // Save new tokens
          localStorage.setItem('accessToken', refreshResult.data.access.token);
          localStorage.setItem('refreshToken', refreshResult.data.refresh.token);
          localStorage.setItem('refreshTokenExp', refreshResult.data.refresh.expires);

          // Retry the original request with the new token
          result = await fetchBaseQuery({
            baseUrl: 'https://sprint4.tanami.betadelivery.com/api/v1',
            prepareHeaders: (headers) => {
              const token = localStorage.getItem('accessToken');
              if (token) {
                headers.set('x-auth-token', token);
              }
              return headers;
            },
          })(args, api, extraOptions);
        }
      } catch (err) {
        console.error('Failed to refresh token:', err);
        // Handle refresh failure (e.g., redirect to login)
      }
    }
  }

  return result;
};

// Create an RTK Query API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/admin',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Store tokens in local storage
          localStorage.setItem('accessToken', data?.data?.access?.token) ;
          localStorage.setItem('refreshToken', data?.data?.refresh?.token);
          // localStorage.setItem('refreshTokenExp', data?.data?.refresh?.expires);
          localStorage.setItem('accessTokenExp', data?.data?.access?.expires);
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: '/auth/user/regenerate-token',
        method: 'POST',
        body: { refreshToken },
      }),
    }),
  }),
});

export const { useLoginMutation, useRefreshTokenMutation } = apiSlice;
