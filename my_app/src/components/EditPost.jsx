import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPost, updatePost } from '../store/blogSlice';

const EditPost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, status, error } = useSelector(state => state.posts);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (postId) {
      dispatch(fetchPost(postId));
    }
  }, [dispatch, postId]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ postId, postData: { title, content } })).then((action) => {
      if (action.meta.requestStatus === 'fulfilled') {
           navigate('/posts');

      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Blog</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <br></br>
      <textarea placeholder="Description" value={content} onChange={(e) => setContent(e.target.value)} required />
      <br></br>
      <button type="submit" disabled={status === 'loading'}>Save</button>
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default EditPost;
