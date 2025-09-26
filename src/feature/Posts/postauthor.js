import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";


const PostAuthor = ({userId}) => {  // here i send the user id as a props
  const users = useSelector(selectAllUsers)

  const author = users.find(user => user.id === Number(userId)) // now i can find the author
  return (
    <span>by {author ? author.name : 'Unknown author'}</span> 

)
}

export default PostAuthor

// we make this because we can not make a return function in the users slice 

