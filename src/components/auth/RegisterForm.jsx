import React from 'react';

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 text-left">Full Name</label>
        <input 
          type="text" 
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 text-left">Email Address</label>
        <input 
          type="email" 
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="email@example.com"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 text-left">Password</label>
          <input 
            type="password" 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 text-left">Confirm</label>
          <input 
            type="password" 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition-colors">
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;