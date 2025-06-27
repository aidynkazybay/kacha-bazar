import { createSlice } from '@reduxjs/toolkit';

type UserDataState = {
  name: string;
};

const initialState: UserDataState = {
  name: 'John',
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
});

export default userSlice.reducer;
