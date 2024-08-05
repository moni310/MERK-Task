import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import { signIn } from '../store/authSlice';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formData)).then((action) => {
      if (action.meta.requestStatus === 'fulfilled') {
            navigate('/posts', { replace: true });
    
      }
    });
  };

  return (<>
  
  
  
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <br></br>
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      
      <br></br>

      <button type="submit" disabled={authStatus === 'loading'}>Sign In</button>
    </form>


<p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      {authError && <p>Error: {authError}</p>}
  </>
  );
};

export default SignIn;
