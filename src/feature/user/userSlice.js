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
    reducers:{
        deleteUser:(state,action)=>{
            console.log(action)
            return{
                ...state,
                users:state.users.filter(user=>user.id!==action.payload)
            }
            
        }
    }
})

export const {deleteUser} = userSlice.actions

export default userSlice.reducer