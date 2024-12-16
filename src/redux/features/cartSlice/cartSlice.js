import { createSlice } from "@reduxjs/toolkit";

const initialState=[

]

export const cartSlice = createSlice({
    name :'cartSlice',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const itemExists = state.find((item) => item.id === action.payload.id);
            if (!itemExists) {
                state.push(action.payload); // Add the new item to the cart state
            } else {
                // Optionally, you could increase quantity or show a message
                console.log("Item already in the cart!");
            }
        },
    }
});

export const {addToCart}=cartSlice.actions


export default cartSlice.reducer;