/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doGet } from '../../services/api';
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';

interface UserType {
  id: number;
  email: string;
  name: string;
  password: string;
}

interface UsersSlice {
  users: UserType[];
  requestAuth: boolean;
}

const initialState: UsersSlice = { users: [], requestAuth: true };

export const getUsers = createAsyncThunk('users/getUsers', async (token: string, thunk) => {
  const response = await doGet('/users', token);

  if (response?.data?.users.length) {
    return { users: response.data.users, requestAuth: true };
  }

  if (!response.auth) {
    return { users: [], requestAuth: false };
  }

  return initialState;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default userSlice.reducer;
