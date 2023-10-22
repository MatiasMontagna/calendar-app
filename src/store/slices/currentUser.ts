import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type UserType = 'professional' | 'client';

type CurrentUserState = {
  userEmail?: string,
  userType?: UserType,
};

const initialState: CurrentUserState = {
  userEmail: undefined,
  userType: undefined,
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<CurrentUserState>) {
      state.userEmail = action.payload.userEmail;
      state.userType = action.payload.userType;
    },
  },
});
