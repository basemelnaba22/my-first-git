import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";


const AddPostForm = () => {
    const dispatch = useDispatch()  // to dispatch the action ( to can use it )
   // to get the value of the input
    const [title, setTitle] = useState('')   
    const [content, setContent] = useState('') 
    const [userId, setUserId] = useState('')  
   // end get the value of the input

    const users = useSelector(selectAllUsers)   // to can show the users

    // this is the function which will change the value of the input and send it every time it change
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)
    // end this is the function which will change the value of the input


    // this is the function which will add the post and clear the input
    const onsavePostClicked = (e) => {
        e.preventDefault(); // Prevents the page reload
        if (title && content && userId) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
            setUserId('')
        }
    }
    // to make the button disabled
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    
    //  i have been make users array in a users Slice
    // to  map the users and show the users options
    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))


    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select
                 id="postAuthor" 
                 value={userId} 
                 onChange={onAuthorChanged}>
                <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button 
                onClick={onsavePostClicked} 
                type="button"
                disabled={!canSave}>
                Submit
                </button>
            </form>
        </section>
    )
}

export default AddPostForm
