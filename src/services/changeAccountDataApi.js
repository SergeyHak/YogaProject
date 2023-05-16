import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const changeAccountDataApi = createApi({
  reducerPath: "YogaApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD0Y0SlGB8NLbUylBAF7-VNn0FIIIs53m4",
  }),
  endpoints: (builder) => ({
    getByName: builder.query({
      query: () => `${""}`,
    }),
    emailChange: builder.mutation({
      query: ({email, token}) => ({
        url: "",
        method: "POST",
        body: {
          idToken: token,
          email,
          returnSecureToken: true,
        },
      }),
    }),
    passChange: builder.mutation({
      query: ({password, token}) => ({
        url: "",
        method: "POST",
        body: {
          idToken: token,
          password,
          returnSecureToken: true,
        },
      }),
    }),
  }),
});
export const {
  useGetByNameQuery,
  useEmailChangeMutation,
  usePassChangeMutation,
} = changeAccountDataApi;
