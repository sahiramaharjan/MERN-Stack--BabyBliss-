import React, { useState } from 'react';

function PasswordToggle({ passwordRef }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <button type="button" onClick={togglePassword}>
      {showPassword ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 7.5l4 4L17 18" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.243L7.88 12.15m8.94-3.91L12 14l1.14 1.14m-4.27 4.27L12 18l1.14-1.14m-4.27 4.27L12 22l1.14-1.14m-4.27-4.27m12 0l-4.27-4.27m4.27 4.27l-1.14-1.14m-4.27-4.27m12 0l-4.27-4.27m4.27 4.27l-1.14-1.14m-4.27-4.27" />
        </svg>
      )}
    </button>
  );
};

export default PasswordToggle;
