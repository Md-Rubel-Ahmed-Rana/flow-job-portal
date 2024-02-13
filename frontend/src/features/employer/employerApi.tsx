import apiSlice from "../api/apiSlice";


const employerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        employerRegister: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/api/recruiters",
                body: data
            })
        })
    })
})

export const { useEmployerRegisterMutation } = employerApi