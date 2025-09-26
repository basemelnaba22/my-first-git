import { useDispatch } from "react-redux";
import { reactionsAdded } from "./postsSlice";
import React from 'react'
const reactionEmoji = {
    thumbsUp: "👍",
    hooray: "🎉",
    heart: "❤️",
    rocket: "🚀",
    eyes: "👀"
}



const ReactionButton = ({post}) => { // post have been send by the props
  const dispatch = useDispatch()


   // this is the function which will show the reaction
   // i do not know why i have to use Object.entries(reactionEmoji)
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {  return (
    <button type="button"
    className="reactionButton"
     onClick={() => dispatch(reactionsAdded({postId: post.id , reaction: name}))}>
    {emoji}
    {post.reactions[name]}
    </button>
  )
})

  return (
    <div>{reactionButtons}</div>
  )
  
}

export default ReactionButton
