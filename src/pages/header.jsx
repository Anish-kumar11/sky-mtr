import { useState } from "react";

function  Header() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignIn = () => setShowSignIn(!showSignIn);
  const toggleSignUp = () => setShowSignUp(!showSignUp);

  return (
    <header className="w-full bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold texr-green-500">Sky Max Technologies</h1>
        <nav className="flex items-center space-x-4">
          <span className="text-sm sm:text-base">Your all-in-one delivery solution</span>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-700 px-4 py-2 rounded-md" onClick={toggleSignIn}>User Sign In</button>
            <button className="bg-white text-blue-700 px-4 py-2 rounded-md" onClick={toggleSignUp}>User Sign Up</button>
            <button className="bg-white text-blue-700 px-4 py-2 rounded-md" onClick={toggleSignIn}>Admin Sign In</button>
            <button className="bg-white text-blue-700 px-4 py-2 rounded-md" onClick={toggleSignUp}>Admin Sign Up</button>
          </div>
        </nav>
      </div>

      {/* Sign In Form */}
      {showSignIn && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-100 text-gray-800 p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block">Password</label>
                <input type="password" id="password" className="w-full p-2 border rounded-md" placeholder="Enter your password" />
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-md">Sign In</button>
            </form>
            <button onClick={toggleSignIn} className="mt-4 text-blue-700">Close</button>
          </div>
        </div>
      )}

      {/* Sign Up Form */}
      {showSignUp && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-100 text-gray-800 p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block">Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded-md" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block">Password</label>
                <input type="password" id="password" className="w-full p-2 border rounded-md" placeholder="Create a password" />
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-md">Sign Up</button>
            </form>
            <button onClick={toggleSignUp} className="mt-4 text-blue-700">Close</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
