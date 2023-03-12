// Need to use the React-specific entry point to import createApi
import { Auth } from "@/types/auth";
import { ProfileResponse } from "@/types/profile";
import { getItem } from "@/utils/localStorage";
import { ELocalItem } from "@/utils/localStorage/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: "profile",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/membership-service/1.2.0/users`,
    prepareHeaders: (headers) => {
      const accessToken = getItem<Auth>(ELocalItem.Auth)?.access_token;
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserProfile: builder.query<ProfileResponse, void>({
      query: () => "/me",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetUserProfileQuery } = profileApi;
