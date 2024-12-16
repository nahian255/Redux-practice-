import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 22,
}


export const counterSlice = createSlice({
    name: 'akbex foot',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },

    }

});

export const { increment, decrement, incrementByAmount, name } = counterSlice.actions

export default counterSlice.reducer
