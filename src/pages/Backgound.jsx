import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {children}
    </div>
  );
};

export default Background;
