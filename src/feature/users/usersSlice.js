import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id:0, name: 'basem'},
    { id:1, name: 'ahmed'},
    { id:2, name: 'Heba' }
]




const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});


export const selectAllUsers = state => state.users
export default usersSlice.reducer


// here i make user slice and export it for the store, 
// and export the selectAllUsers function for :
//  postAuthor : to can find the author (user id === post id)
//  AddPostForm : to set the state of the users and to can show the users