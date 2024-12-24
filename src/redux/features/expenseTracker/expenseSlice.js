import { createSlice } from "@reduxjs/toolkit"



const expenseSlice = createSlice({
    name:'expenSlice',
    initialState : {
        expense:[],
        isloading:false,
        isError:false

    },
    
    reducers:{},
   
});

export default expenseSlice.reducer;