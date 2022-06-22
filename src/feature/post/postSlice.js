import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";

export const getPostes = createAsyncThunk("post/getPostes", async()=>{
   const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data
})

const postSlice = createSlice({
    
    name:'post',
    initialState:{
        posts:[],
        loading:false
    },
    reducers: {},
    //for promese methodes ... like axios
    extraReducers:{
        [getPostes.pending]:(state)=>{
            state.loading=true
            console.log("pending",state.loading)
        },
        [getPostes.fulfilled]:(state,{payload})=>{
            console.log("data filled : ",payload)
            return{
                ...state,
                posts:payload,
                loading:false
            }
        },
        [getPostes.rejected]:()=>{
            console.log("response rejected")
        }
    }

})
export default postSlice.reducer;