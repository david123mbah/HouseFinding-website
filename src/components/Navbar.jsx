import React, { useState, useEffect } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { auth } from '../server/Config'; // Import the Firebase authentication module
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userPhotoURL, setUserPhotoURL] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setUserPhotoURL(user?.photoURL);
      setUserEmail(user?.email);
    });

    return unsubscribe;
  }, []);

  const getMenuStyles = (menuOpened) => {
    return {
      right: !menuOpened && '-100%',
      transition: 'right 0.3s ease',
    };
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/path-to-logo.png" alt="Job Portal Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-2xl font-bold text-blue-600">JobFinder</h1>
        </div>
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className={`flex-col md:flex-row md:flex md:items-center absolute md:static top-full left-0 bg-white w-full md:w-auto shadow-md md:shadow-none ${menuOpened ? 'block' : 'hidden'}`} style={getMenuStyles(menuOpened)}>
            <NavLink to="/" exact className="block px-4 py-2 text-gray-700 hover:text-blue-600 md:ml-4">
              Home
            </NavLink>
            {currentUser && (
              <>
                <NavLink to="/property" className="block px-4 py-2 text-gray-700 hover:text-blue-600 md:ml-4">
                  Jobs
                </NavLink>
                <NavLink to="/contact" className="block px-4 py-2 text-gray-700 hover:text-blue-600 md:ml-4">
                  Contact Us
                </NavLink>
                <NavLink to="/Add" className="block px-4 py-2 text-gray-700 hover:text-blue-600 md:ml-4">
                  Add Jobs
                </NavLink>
                {currentUser.email === 'davidmbah1234@gmail.com' && (
                  <NavLink to="/Agent" className="block px-4 py-2 text-gray-700 hover:text-blue-600 md:ml-4">
                    Admins
                  </NavLink>
                )}
              </>
            )}
            {currentUser ? (
              <div className="block md:flex items-center px-4 py-2 md:ml-4">
                {userPhotoURL ? (
                  <img src={userPhotoURL} alt="Profile" className="w-8 h-8 rounded-full border mr-2" />
                ) : (
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
                    {currentUser.displayName?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="text-gray-700">Welcome, {currentUser.displayName}!</p>
                  <button className="text-red-500 hover:text-red-700" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <NavLink to="/login" className="block px-4 py-2 bg-blue-600 text-white rounded-md md:ml-4">
                Log-in
              </NavLink>
            )}
          </div>
        </OutsideClickHandler>
        <div className="md:hidden">
          <button className="text-gray-700" onClick={() => setMenuOpened((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
