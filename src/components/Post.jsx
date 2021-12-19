import React from 'react'
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const Post = ({ title, body, deletePost, postId }) => {
    const navigate = useNavigate();
    return (
        <div className='post'>
            <div>
                <div className='post__title'>
                    <strong>
                        {title}
                    </strong>
                </div>
                <div className='post__content'>
                    {body}
                </div>
            </div>
            <div className='post__buttons'>
                <MyButton onClick={() => deletePost(postId)}>Delete</MyButton>
                <MyButton onClick={() => navigate(`/posts/${postId}`)}>Open</MyButton>
            </div>
        </div>
    )
}

export default Post;