import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar'; // Adjust the import path as needed
import PublicGallery from './layout/PublicGallery'; // Adjust the import path as needed
import SignupForm from './layout/SignupForm'; // Adjust the import path as needed
import UploadTattooForm from './layout/UploadTattooForm'; // Adjust the import path as needed
import UserTattoos from './layout/UserTattoos'; // Adjust the import path as needed
import LoginForm from './LoginForm'; // Adjust the import path as needed
import MyTattoos from './MyTattoos'; // Adjust the import path as needed

const HomePage = () => {
  const [tattoos, setTattoos] = useState([]);

  useEffect(() => {
    // Fetch tattoos data here
  }, []);

  const handleSignup = (formData) => {
    console.log('Form submitted with data:', formData);
    // Handle signup logic here
  };

  const handleTattooUpload = (formData) => {
    console.log('Tattoo form submitted with data:', formData);
    // Handle tattoo upload logic here
  };

  const handleLogin = (formData) => {
    console.log('Login form submitted with data:', formData);
    // Handle login logic here
  };

  return (
    <div>
      <Navbar />
      <div className="content">
        <LoginForm onSubmit={handleLogin} />
        <MyTattoos tattoos={tattoos} />
        {/* Pass tattoos data as props to PublicGallery and UserTattoos */}
        <PublicGallery tattoos={tattoos} />
        <SignupForm onSubmit={handleSignup} />
        <UploadTattooForm onSubmit={handleTattooUpload} csrfToken="your_csrf_token_here" />
        <UserTattoos tattoos={tattoos} />
      </div>
    </div>
  );
};

export default HomePage;
