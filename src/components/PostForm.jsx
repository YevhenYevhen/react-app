import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const PostForm = ({ createPost }) => {
    const [newPost, setNewPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (e) => {
        e.preventDefault();
        createPost({...newPost, id: Date.now()})
        setNewPost({ title: '', body: '' })
    }
    
    return (
        <form>
            <MyInput value={newPost.title} onChange={e => setNewPost({ ...newPost, title: e.target.value })} type='text' placeholder='Title' />
            <MyInput value={newPost.content} onChange={e => setNewPost({ ...newPost, body: e.target.value })} type='text' placeholder='Content' />
            <MyButton onClick={addNewPost}>Send</MyButton>
        </form>
    )
}

export default PostForm
