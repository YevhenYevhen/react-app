/* eslint-disable react/prop-types */
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Post from './Post';
import '../css/style.css';

const PostList = ({ posts, deletePost, title }) => (
  <>
    {posts.length ? (
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
    ) : (
      <h1 style={{ textAlign: 'center' }}>No posts yet...</h1>
    )}
    <TransitionGroup>
      {posts.map((p) => (
        <CSSTransition key={p.id} timeout={500} className="post">
          <Post
            title={p.title}
            body={p.body}
            postId={p.id}
            deletePost={deletePost}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

export default PostList;
