import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './postauthor'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'

const Posts = () => {
  // this is the function which will get the post to show 
  const x = useSelector(selectAllPosts) ;

  // that is putting the new post in top by sort the date 
  const orderedPosts = x.slice().sort((a, b) => b.date.localeCompare(a.date))

  const reducerPosts = orderedPosts.map(post => (  // this is the function which will show the post
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />   {/* here i use the user id that have been send by the props */}
        <TimeAgo timestamp={post.date} />     {/* here i use the timestamp that have been send by the props */}
      </p>
      <ReactionButton post={post} />          {/* here i use the postthat have been send by the props */}
    </article>
  ))
  return (
    <div>
      <h2>Posts</h2>
      {reducerPosts}
    </div>
  )
}

export default Posts