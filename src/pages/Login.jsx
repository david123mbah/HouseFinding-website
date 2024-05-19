import React from 'react';

const Login = () => {
  return (
    <div>
      <main className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
          <div className="text-center">
            <div className="mt-2">
              <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Welcome Back</h3>
            </div>
          </div>
          <form className="space-y-5">
            <div>
              <label className="text-sm text-gray-600 font-bold">Email</label>
              <input
                type="email"
                autoComplete="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 font-bold">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm">Don't have an account? <div className="hover:underline font-bold">Sign up</div></p>
          <div className="flex flex-row text-center w-full">
            <div className="border-b-2 mb-2.5 mr-2 w-full"></div>
            <div className="text-sm font-bold w-fit">OR</div>
            <div className="border-b-2 mb-2.5 ml-2 w-full"> </div>
          </div>
          <button
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-blue-100 transition duration-300 active:bg-blue-100"
          >
            <p>Sign-up</p>
            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG paths removed */}
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;