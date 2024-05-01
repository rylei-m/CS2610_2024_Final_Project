import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the import path as needed
import PublicGallery from '../components/PublicGallery'; // Adjust the import path as needed
import SignupForm from '../components/SignupForm'; // Adjust the import path as needed
import UploadTattooForm from '../components/UploadTattooForm'; // Adjust the import path as needed
import UserTattoos from '../components/UserTattoos'; // Adjust the import path as needed
import LoginForm from './LoginForm'; // Adjust the import path as needed
import MyTattoos from './MyTattoos'; // Adjust the import path as needed
import ConfirmDelete from '../components/ConfirmDelete'; // Adjust the import path as needed

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

  const handleDelete = (tattooId) => {
    console.log('Delete tattoo with ID:', tattooId);
    // Handle delete logic here
  };

  return (
    <div>
      <Navbar />
      <div className="content">
        <LoginForm onSubmit={handleLogin} />
        <MyTattoos tattoos={tattoos} onDelete={handleDelete} />
        <PublicGallery tattoos={tattoos} />
        <SignupForm onSubmit={handleSignup} />
        <UploadTattooForm onSubmit={handleTattooUpload} csrfToken="your_csrf_token_here" />
        <UserTattoos tattoos={tattoos} />
        {/* Pass the tattoo object to the ConfirmDelete component */}
        <ConfirmDelete tattoo={{ id: 1, description: "Sample tattoo" }} />
      </div>
    </div>
  );
};

export default HomePage;
