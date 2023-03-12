// Need to use the React-specific entry point to import createApi
import { Auth, LoginInfo } from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { credentialInfo } from "./auth.config";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}`,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/x-www-form-urlencoded");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<Auth, LoginInfo>({
      query: (loginInfo) => ({
        url: "/token",
        method: "post",
        body: new URLSearchParams({ ...credentialInfo, ...loginInfo }),
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = authApi;
