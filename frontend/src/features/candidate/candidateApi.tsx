import apiSlice from "../api/apiSlice";


const candidateApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCandidate: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/api/candidates",
                body: data
            })
        }),
        updateCandidate: builder.mutation({
            query: ({data, id}) => ({
                method: "PUT",
                url: `/api/candidates/${id}`,
                body: data
            }),
            invalidatesTags: ["userRefetch"]
        })
    })
})

export const { useCreateCandidateMutation, useUpdateCandidateMutation } = candidateApi