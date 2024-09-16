import React, { useState } from 'react';
import { signOut, getCurrentUser, updatePassword } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle the sign out
  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/'); // Navigate back to the main page after logout
    } catch (error) {
      setErrorMessage('Error signing out');
    }
  };

  // Handle the change password
  const handleChangePassword = async () => {
    try {
      const user = await getCurrentUser(); // Get the current authenticated user
      await updatePassword(user, oldPassword, newPassword); // Update password using Amplify v6 API
      setSuccessMessage('Password changed successfully!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error changing password. Please ensure the old password is correct.');
      setSuccessMessage('');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>User Settings</h2>

      {/* Change Password Form */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Change Password</h3>
        <input
          type="password"
          placeholder="Current Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          style={{ margin: '5px', padding: '8px', width: '200px' }}
        />
        <br />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ margin: '5px', padding: '8px', width: '200px' }}
        />
        <br />
        <button onClick={handleChangePassword} style={{ padding: '10px 20px', marginTop: '10px' }}>
          Change Password
        </button>
      </div>

      {/* Logout Button */}
      <div>
        <h3>Logout</h3>
        <button onClick={handleSignOut} style={{ padding: '10px 20px', marginTop: '10px' }}>
          Log Out
        </button>
      </div>

      {/* Success and Error Messages */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default UserPage;
