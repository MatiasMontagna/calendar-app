import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type UserType = 'professional' | 'client';

type CurrentUserState = {
  user?: UserType
};

const initialState: CurrentUserState = {
  user: undefined,
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<UserType | undefined>) {
      state.user = action.payload;
    },
  },
});
