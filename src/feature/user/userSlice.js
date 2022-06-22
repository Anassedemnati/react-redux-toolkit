import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    users:[
        {id:1,name:'Anasse',age:22},
        {id:2,name:'Ahmed',age:21},
        {id:3,name:'driss',age:24},
    ],
    loading:true
}


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{}
})


export default userSlice.reducer