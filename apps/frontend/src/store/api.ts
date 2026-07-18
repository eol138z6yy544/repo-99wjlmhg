import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiUrl } from '../config';

const baseUrl = getApiUrl();

function getInitData(): string | null {
  if (typeof window === 'undefined') return null;
  return window.Telegram?.WebApp?.initData || localStorage.getItem('gcat_initData');
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const initData = getInitData();
      if (initData) {
        headers.set('authorization', initData);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['user', 'task', 'streak', 'withdraw', 'admin'],
  endpoints: (builder) => ({
    appOpen: builder.mutation<{ msg: string; user: any }, string>({
      query: (auth) => ({ url: '/user', method: 'POST', body: { auth } }),
      invalidatesTags: ['user', 'task'],
    }),
    myInfo: builder.query<{ user: any }, void>({
      query: () => '/user',
      providesTags: ['user'],
    }),
    getTask: builder.query<any, void>({
      query: () => '/task',
      providesTags: ['task'],
    }),
    claimTask: builder.mutation<any, { token: string; address?: string }>({
      query: (body) => ({ url: '/task/claim', method: 'POST', body }),
      invalidatesTags: ['task', 'user'],
    }),
    getCheckinStatus: builder.query<any, void>({
      query: () => '/user/checkin/status',
      providesTags: ['streak'],
    }),
    claimCheckin: builder.mutation<any, void>({
      query: () => ({ url: '/user/checkin/claim', method: 'POST' }),
      invalidatesTags: ['streak', 'user'],
    }),
    getReferralMilestones: builder.query<any[], void>({
      query: () => '/user/referral-milestones',
      providesTags: ['user'],
    }),
    claimMilestone: builder.mutation<any, void>({
      query: () => ({ url: '/user/claim-milestone-reward', method: 'PATCH' }),
      invalidatesTags: ['user'],
    }),
    getMyReferrals: builder.query<any, number>({
      query: (page = 1) => `/user/referrals?page=${page}`,
      providesTags: ['user'],
    }),
    getLeaderboard: builder.query<any, void>({
      query: () => '/user/leaderboard',
      providesTags: ['user'],
    }),
    getUserList: builder.query<any[], void>({
      query: () => '/user/user-list',
      providesTags: ['user'],
    }),
  }),
});

export const {
  useAppOpenMutation,
  useMyInfoQuery,
  useGetTaskQuery,
  useClaimTaskMutation,
  useGetCheckinStatusQuery,
  useClaimCheckinMutation,
  useGetReferralMilestonesQuery,
  useClaimMilestoneMutation,
  useGetMyReferralsQuery,
  useGetLeaderboardQuery,
  useGetUserListQuery,
} = api;
