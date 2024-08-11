import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterComponent() {
    const [formValues, setFormValues] = useState({ email: "", password:"" });
    const [errors, setErrors] = useState({});
   
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        };
   
    const validate = () => {
      let tempErrors = {};
      if (!formValues.email) {
        tempErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        tempErrors.email = "Email is invalid";
      }
      if (!formValues.password) tempErrors.password = "Password is required";
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    };
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        console.log("Form submitted successfully");
        alert("Thank You for subscribing! :)")
      }
    };

  return (
    <div className='flex flex-col items-center justify-center  bg-[#e8f5f6] h-[525px]'>
    <div className="flex flex-col items-center justify-center  w-[500px] h-[450px] bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-4">Get's started.</h2>
      <p className="text-sm text-gray-500 mb-4">Already have an account? <Link to ="/login" className="text-blue-500 underline">Log in</Link></p>
      <div className="flex space-x-4">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border-gray-200 border border-solid rounded-md">
        <i class="ri-google-fill text-lg text-black"></i> Sign up with Google
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
        <i class="ri-facebook-circle-fill text-lg text-white "></i> Sign up with Facebook
        </button>
      </div>
      <p className="text-gray-500 my-4">or</p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Email address"
          name="email"
            value={formValues.email}
            onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md mb-4"
        />
        {errors.email && <p className='text-red-500'>{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          value={formValues.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md mb-2 "
        />
        {errors.password && <p className='text-red-500'>{errors.password}</p>}
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md w-full">
          Register
        </button>
      </form>
    </div>
    </div>
  );
}

export default RegisterComponent;
