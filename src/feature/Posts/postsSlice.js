import { createSlice } from '@reduxjs/toolkit' 
import { nanoid } from "@reduxjs/toolkit";  //to make unique id 
import { sub } from 'date-fns'; // to make time ago

// this is the initial state

const initialState = [
  { id: 1, title: 'title', content: 'content' , userId: 1 ,
     date: sub(new Date(), { minutes: 10 }).toISOString(),
   reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 } },
  { id: 2, title: 'title', content: 'content' , userId: 2 ,
    date: sub(new Date(), { minutes: 5 }).toISOString() ,
  reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }},
  { id: 3, title: 'title', content: 'content' , userId: 3,
     date: sub(new Date(), { minutes: 1 }).toISOString() ,
  reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }},
]

export const postsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    postAdded:{ 

      // push new post reducer 
      
      reducer:(state, action) => {   // any reducer must have a state and action
         state.push(action.payload)  // push the new post into the state
      },
      prepare(title, content , userId) {  // this is the function which will prepare the payload
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId : String(userId),
            reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }
          }
        }
      }

      // end push new post reducer
      
    },
    // this is the function which will add the reaction
    reactionsAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }
    // end this is the function which will add the reaction
  },
})

 export const selectAllPosts = state => state.posts    // make the selectAllPosts function here is good sturcture 

export const { postAdded , reactionsAdded } = postsSlice.actions  // export the actions
export default postsSlice.reducer  // export the reducer for the store 