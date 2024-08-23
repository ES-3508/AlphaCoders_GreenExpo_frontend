import { apiSlice } from "../apiSlice";

const USER_ENDPOINTS: string = "/user";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUserApi: builder.mutation({
      //for user login this will send  login credentials to server in post method and get response
      query: (data) => ({
        url: `${USER_ENDPOINTS}/login`,
        method: "POST",
        body: data,
      }),
    }),
    registerUserApi: builder.mutation({
      //for user register this will send  login credentials to server in post method and get response
      query: (data) => ({
        url: `${USER_ENDPOINTS}/register`,
        method: "POST",
        body: data,
      }),
    }),
    logoutUserApi: builder.query({
      query: () => ({
        url: `${USER_ENDPOINTS}/logout`,
      }),
    }),
  }),
});

export const {
  useLoginUserApiMutation,
  useRegisterUserApiMutation,
  useLogoutUserApiQuery,
} = authApiSlice;
export default authApiSlice.reducer;
