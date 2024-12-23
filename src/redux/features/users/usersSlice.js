import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    nickName: 'aaaaaa',
    usersArray: [

    ]
}
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const respons = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await respons.json()
    console.log(data, ' from thunk')
    return data;
})

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        updateNickName: (state, action) => {
            // console.log(state?.nickName, 'state', action, 'from reducer')
            state.nickName = action.payload

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action,'from addcase')
                state.usersArray = action.payload; // Update the usersArray with fetched data
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Handle error
            });
    }

});

export const { updateNickName } = userSlice.actions

export default userSlice.reducer;