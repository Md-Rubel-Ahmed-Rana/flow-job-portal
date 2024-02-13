import apiSlice from "../api/apiSlice"


const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createJobPost: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/api/jobs",
                body: data
            }),
            invalidatesTags: ["jobs"]
        }),
        getJobs: builder.query({
            query: () => ({
                url: "/api/jobs",
            }),
            providesTags: ["jobs"]
        }),
        deleteJob: builder.mutation({
            query: (id: string) => ({
                method: "DELETE",
                url: `/api/jobs/${id}`,
            }),
            invalidatesTags: ["jobs"],
        }),
        applyJob: builder.mutation({
            query: (data: {}) => ({
                method: "PATCH",
                url: "/api/jobs/apply",
                body: data
            }),
            invalidatesTags: ["jobs"],
        }),
        jobQuery: builder.mutation({
            query: (data: {}) => ({
                method: "PATCH",
                url: "/api/jobs/query",
                body: data
            }),
            invalidatesTags: ["query"]
        }),
        getSingleJob: builder.query({
            query: (id: string) => ({
                url: `/api/jobs/${id}`,
            }),
            providesTags: ["query"]
        }),
        getUserDetails: builder.query({
            query: (id: string) => ({
                url: `/api/candidates/${id}`,
            }),
            providesTags: ["userRefetch"]
        }),
        getMyJobs: builder.query({
            query: (email: string) => ({
                url: `/api/jobs/myjobs/${email}`,
            }),
        }),
        myJobPosts: builder.query({
            query: (email: string) => ({
                url: `/api/jobs/myjobposts/${email}`,
            }),
            providesTags: ["myjobs"]
        }),
        closeJob: builder.mutation({
            query: ({id, status}) => ({
                method: "PUT",
                url: `/api/jobs/close/${id}?status=${status}`
            }),
            invalidatesTags: ["myjobs"],
        }),
    })
})

export const {
    useCreateJobPostMutation, 
    useGetJobsQuery, 
    useDeleteJobMutation, 
    useGetSingleJobQuery,
    useApplyJobMutation,
    useGetMyJobsQuery,
    useJobQueryMutation,
    useGetUserDetailsQuery,
    useMyJobPostsQuery,
    useCloseJobMutation
} = jobApi