import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: JSON.parse(localStorage.getItem('currentUser')) || {},
    reducers: {
        login(state,action) {
            return { user: action.payload, login: true };
        },
        logout(state, action) {
            return { user: null, login: false };
        },
    },
});

const { actions, reducer } = userSlice;
export const { login, logout } = actions;
export default userSlice.reducer;