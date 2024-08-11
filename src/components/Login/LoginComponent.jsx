import React, {useRef} from 'react'
// import PasswordToggle from './PasswordToogle';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  const passwordRef = useRef("");
  return (
    <div className="flex justify-center items-center h-[525px] bg-[#e8f5f6] ">
    <div className='bg-white rounded-lg shadow-lg  w[500px] mr-10'>
      <form className="flex  flex-col justify-center items-center w-[500px] h-[450px] p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Welcome Back! </h2>
      {/* <p className='text-md font-bold text-gray-800'>Login to unlock exclusive deals, personalized recommendations,</p>
      <p className='text-md font-bold text-gray-800 '> and a seamless shopping experience.</p> */}
        <div className="mb-4">
          <label className=" text-gray-700 text-sm font-bold mb-2" >
            Email
          </label><br/>
          <input className="shadow  w-[350px] border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
        </div>
        <div className="mb-4 relative ">
          <label className=" text-gray-700 text-sm font-bold mb-2" >
            Password
          </label><br/>
          <input className="shadow w-[350px] border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Your password" />
          <i class="ri-eye-off-fill  text-lg absolute right-3 bottom-1"></i>
          {/* <input type={showPassword ? 'text' : 'password'} ref={passwordRef} />
      <PasswordToggle passwordRef={passwordRef} /> */}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[350px] py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Login
          </button>
          </div>
          <div className="flex flex-col items-center">
      <div className="w-[380px] border-t border-gray-300 my-4"></div>
      <p className="text-sm text-gray-500 font-semibold">or continue with</p>
      <div className="flex space-x-4 mt-4">
        <button className="bg-black hover:bg-gray-800 text-gray-700 font-bold py-2 px-4 rounded-full">
        <i class="ri-google-fill text-xl text-white"></i>
        </button>
        <button className="bg-black hover:bg-gray-800 text-gray-700 font-bold py-2 px-4 rounded-full">
        <i class="ri-apple-fill text-xl text-white"></i>
        </button>
        <button className="bg-black hover:bg-gray-800 font-bold py-2 px-4 rounded-full">
         <i class="ri-facebook-circle-fill text-xl text-white "></i>
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-4">Not a member? <Link to="/register" className="text-blue-500">Register now</Link></p>
    </div>
      </form>
      </div>
      {/* <div className='absolute left-[650px]'>
            <img  className="w-[500px] h-[450px] rounded-xl" src='https://i.pinimg.com/564x/74/1f/9c/741f9cff3e594ffe70a7d60ce767f4f1.jpg' alt='image'/>
          </div> */}
    </div>
  )
}

export default LoginComponent