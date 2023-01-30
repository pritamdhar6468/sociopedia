import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

const initialState ={
    mode:"light",
    user:null,
    token: null,
    posts:[],
};

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setMode: (state) =>{
            startTransition.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state,action) =>{
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) =>{
            state.user = null;
            state.token = null;
        },
        setFriends: (state,action) =>{
            if(state.user) {
                state.user.friends = action.payload.friends;
            }else{
                console.error("user friends non existent :(")
            }
        },
        setPosts: (state) =>{
            state.posts = action.payload.posts;
            
        },
        setPost: (state) =>{
            const updatePosts = state.posts.map((post)=>{
                if (post._id === action.payload.post_id) return action.payload.post;
                return post;
            });
            state.posts = updatePosts;
        },
    },
});

export const { setMode,setLogin,setLogout,setFriends,setPosts,setPost} = authSlice.actions;
export default authSlice.reducer;