import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import { signUp } from '../store/authSlice';


const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    gender: '',
    age: '',
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
    dispatch(signUp(formData)).then((action) => {
      if (action.meta.requestStatus === 'fulfilled') {
        navigate('/signin');
      }
    });
  };

  return (
    <>
  
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <br></br>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <br></br>
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
     <br></br>
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="" disabled>Select Gender</option>
        <br></br>
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <br></br>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <br></br>
     
      <button type="submit" disabled={authStatus === 'loading'}>Sign Up</button>
   
    </form>
 

<p>You already have an account? <Link to="/">Sign In</Link></p>
      {authError && <p>Error: {authError}</p>}
    </>
    
  );
};

export default SignUp;
