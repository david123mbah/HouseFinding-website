import React, { useState } from 'react';
import Modal from 'react-modal';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { useAuth } from '../server/context';
import { FaUserCircle, FaLock, FaGoogle } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Login = () => {
  useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setIsModalOpen(false);
          alert('Login successful!');
        })
        .catch((error) => {
          setError(error.message);
          alert('Error signing in: ' + error.message);
        });
    } catch (error) {
      setError('Error signing in');
      alert('Error signing in: ' + error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setIsModalOpen(false);
          alert('Account created successfully!');
        })
        .catch((error) => {
          setError(error.message);
          alert('Error creating account: ' + error.message);
        });
    } catch (error) {
      setError('Error creating account');
      alert('Error creating account: ' + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
        .then((result) => {
          setIsModalOpen(false);
          alert('Signed in with Google successfully!');
        })
        .catch((error) => {
          setError('Error signing in with Google');
          alert('Error signing in with Google: ' + error.message);
        });
    } catch (error) {
      setError('Error signing in with Google');
      alert('Error signing in with Google: ' + error.message);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsSigningIn(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError('');
  };

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={handleOpenModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Sign In/Sign Up
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Login/Signup Modal"
        className="modal bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20"
        overlayClassName="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          {isSigningIn ? 'Sign In' : 'Sign Up'}
        </h2>
        <form
          onSubmit={isSigningIn ? handleSignIn : handleSignUp}
          className="space-y-4"
        >
          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full py-2 pl-10 pr-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full py-2 pl-10 pr-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          {error && (
            <div className="text-red-500 font-semibold">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isSigningIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4 border border-gray-300 flex items-center justify-center"
        >
          <FaGoogle className="mr-2" /> Sign in with Google
        </button>
        <div className="flex items-center justify-center mt-4">
          <button
            type="button"
            onClick={() => setIsSigningIn(!isSigningIn)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {isSigningIn
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Sign In'}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
