import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../store/blogSlice';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector(state => state.posts);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, content })).then((action) => {
      if (action.meta.requestStatus === 'fulfilled') {
        navigate('/posts');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Blog</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <br></br>
      <textarea placeholder="Description" value={content} onChange={(e) => setContent(e.target.value)} required />
        <br></br>
      <button type="submit" disabled={status === 'loading'}>Save</button>
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default CreatePost;
