import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Import the Footer component
import Section from './design/Section'; // Import the Section component

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // New email state
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling on unmount
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://hcholast.pythonanywhere.com/register', { username, email, password });
      alert('Registration successful! You can now log in.');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      console.error(err);
      alert(err.response.data.msg || 'Registration failed');
    }
  };

  // Handle Google OAuth registration
  function handleGoogleRegister() {
    window.location.href = "https://hcholast.pythonanywhere.com/auth/google";
  }

  return (
    <div className="flex flex-col justify-between min-h-screen w-screen bg-gray-900">
      {/* Main Content wrapped in Section */}
      <Section>
        <div className="flex items-center justify-center flex-grow px-4 py-8">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 sm:p-8 rounded shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Register</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mb-4 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-4 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-4 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Register
            </button>
            <div className="mt-4 text-center">
              <p className="text-white mb-2">Or</p>
              <button
                type="button"
                onClick={handleGoogleRegister}
                className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
              >
                Register with Google
              </button>
            </div>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Register;
