import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";

export function UserToken() {
  let userToken = useSelector((state) => state.user.token);
  localStorage.setItem("token", userToken);
}
const UsTok = localStorage.getItem("token");
const userMail = localStorage.getItem("userMail");
const userPass = localStorage.getItem("userPass");

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
      query: () => ({
        url: "",
        method: "POST",
        body: {
          idToken: UsTok,
          email: userMail,
          returnSecureToken: true,
        },
      }),
    }),
    passChange: builder.mutation({
      query: () => ({
        url: "",
        method: "POST",
        body: {
          idToken: UsTok,
          password: userPass,
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
