import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: "https://ecogesture-backend2.onrender.com/api/", // ✅ Updated to live backend
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ['User'],
  endpoints: () => ({}),
});
