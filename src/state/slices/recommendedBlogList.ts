import { createSlice } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import axios from 'axios';

export interface recommendedBlogListState {
  blogList: any[];
  isLoading: boolean;
  error: string;
}

const initialState: recommendedBlogListState = {
  blogList: [],
  isLoading: false,
  error: '',
};

const recommendedBlogListSlice = createSlice({
  name: 'recommendedBlogList',
  initialState,
  reducers: {
    startFetch(state) {
      state.isLoading = true;
    },
    finishFetch(state, action) {
      state.blogList = action.payload;
    },
    failToFetch(state, action) {
      state.error = action.payload;
    },
    stopFetch(state) {
      state.isLoading = false;
    },
  },
});

const { startFetch, finishFetch, failToFetch, stopFetch } =
  recommendedBlogListSlice.actions;
type FetchblogListActionType =
  | ReturnType<typeof startFetch>
  | ReturnType<typeof finishFetch>
  | ReturnType<typeof failToFetch>
  | ReturnType<typeof stopFetch>;

export const fetchRCblogListActionCreator =
  (
    blogUrl: string
  ): ThunkAction<void, RootState, unknown, FetchblogListActionType> =>
  async dispatch => {
    dispatch(startFetch());
    const { data: response } = await axios.get(blogUrl);
    const { data: blogList, message, errorNum } = response;
    if (errorNum !== 0) dispatch(failToFetch(message));
    else dispatch(finishFetch(blogList));
    dispatch(stopFetch());
  };
export const recommendedBlogListReducer = recommendedBlogListSlice.reducer;
