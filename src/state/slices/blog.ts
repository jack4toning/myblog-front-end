import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { blogUrl } from '../../config/API';
import axios from 'axios';

export interface blogState {
  blog: any;
  isLoading: boolean;
  error: string;
}

const initialState: blogState = {
  blog: {},
  isLoading: false,
  error: '',
};

export const fetchblog = createAsyncThunk(
  'blog/fetchblog',
  async (blogId: string | undefined, thunkAPI) => {
    const { data: response } = await axios.get(`${blogUrl}?id=${blogId}`);

    return response;
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchblog.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchblog.fulfilled.type]: (state, action) => {
      state.blog = action.payload.data;
      state.isLoading = false;
    },
    [fetchblog.rejected.type]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export const blogReducer = blogSlice.reducer;
