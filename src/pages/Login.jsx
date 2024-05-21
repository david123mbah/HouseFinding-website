import React, { useState } from 'react';
import Modal from 'react-modal';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { useAuth } from '../server/context';

const Login = () => {
  useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      setIsSigningIn(true);
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('User signed in:', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          setIsSigningIn(false);
        });
    } catch (error) {
      console.error('Sign in error:', error);
      setError('Error signing in');
      setIsSigningIn(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setIsSigningIn(true);
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log('User signed up:', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          setIsSigningIn(false);
        });
    } catch (error) {
      console.error('Sign up error:', error);
      setError('Error creating account');
      setIsSigningIn(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsSigningIn(true);
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
        .then((result) => {
          // Google sign-in successful
          const user = result.user;
          console.log('User signed in with Google:', user);
        })
        .catch((error) => {
          // Google sign-in error
          console.error('Google sign-in error:', error);
          setError('Error signing in with Google');
          setIsSigningIn(false);
        });
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError('Error signing in with Google');
      setIsSigningIn(false);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError('');
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpenModal}
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Sign In/Sign Up
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Login/Signup Modal"
        className="modal bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        overlayClassName="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSigningIn ? 'Sign In' : 'Sign Up'}
        </h2>
        <form onSubmit={isSigningIn ? handleSignIn : handleSignUp} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            disabled={isSigningIn}
          >
            {isSigningIn ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-4"
        >
          Sign in with Google
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="flex items-center justify-center mt-4">
          <button
            type="button"
            onClick={() => setIsSigningIn((prevState) => !prevState)}
            className="text-indigo-500 font-semibold hover:underline"
          >
            {isSigningIn ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;