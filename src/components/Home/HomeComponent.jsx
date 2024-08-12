import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import BabyBliss from "../Images/BabyBliss.png";
import ImageFirst from "../Images/ImageFirst.png";
import ImageSecond from "../Images/ImageSecond.png";
import ImageThird from "../Images/ImageThird.png";
import CarSeat from "../Images/Car Seat.png"

const HomeComponent = () => {
     // CAROUSEL
   const [currentIndex, setCurrentIndex] = useState(0);
   const images = [ImageFirst, ImageSecond, ImageThird];
 
   useEffect(() => {
     const intervalId = setInterval(() => {
       setCurrentIndex((currentIndex + 1) % images.length);
     }, 5000);
 
     return () => clearInterval(intervalId);
   }, [currentIndex, images]);
 
   const handlePrevClick = () => {
     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
   };
 
   const handleNextClick = () => {
     setCurrentIndex((currentIndex + 1) % images.length);
   };
 
 //   FEATURED PRODUCTS
 const products = [
     {
       id: 1,
       name: 'Teepee Tent - Red',
       price: 54,
       image: 'https://i.pinimg.com/236x/00/19/43/001943403a59a76a60ebfe7ceb73f9c6.jpg',
     },
     {
       id: 2,
       name: 'Scoot-Around',
       price: 88,
       image: 'https://i.pinimg.com/236x/86/0f/31/860f3115ff0e3f731722d1286b9870b5.jpg',
     },
     {
       id: 3,
       name: 'Elephant',
       price: 35,
       image: 'https://i.pinimg.com/236x/bb/9e/dc/bb9edcdc00b20412d65db66d855eb8e1.jpg',
     },
     {
       id: 4,
       name: 'Relay Performance',
       price: 430,
       image: 'https://i.pinimg.com/236x/ce/fa/73/cefa730a65c093fd72e0f868b424dc2b.jpg',
     },
     {
         id: 5,
         name: ' Fern',
         price: 430,
         image: 'https://i.pinimg.com/236x/bd/4c/6f/bd4c6f40fb875854f872e4e6a2507e9b.jpg',
       },
       {
         id: 6,
         name: ' Jogger ',
         price: 430,
         image: 'https://i.pinimg.com/236x/9c/96/f1/9c96f10cba19b827afffa87be8f19564.jpg',
       },
       {
         id: 7,
         name: 'Relay ',
         price: 430,
         image: 'https://i.pinimg.com/236x/11/bc/16/11bc1638d03163e42d0c54b7d15d5299.jpg',
       },
       {
         id: 8,
         name: 'Performance ',
         price: 430,
         image: 'https://i.pinimg.com/236x/11/18/76/11187631a6fc6d57f6590eaea0c74179.jpg',
       },
 ]
 //CONTACT FORM
 const [formValues, setFormValues] = useState({ name: "", email: "" });
 const [errors, setErrors] = useState({});

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormValues({ ...formValues, [name]: value });
 };

 const validate = () => {
   let tempErrors = {};
   if (!formValues.name) tempErrors.name = "Name is required";
   if (!formValues.email) {
     tempErrors.email = "Email is required";
   } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
     tempErrors.email = "Email is invalid";
   }
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
//  BLOG
 const blogPosts = [
    {
      id: 1,
      image: 'https://i.pinimg.com/564x/a1/4c/4c/a14c4c2e18083b8eee0404328e590896.jpg',
      date: 'September 1, 2016',
      title: 'Few quips galvanized the mock jury box',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/564x/be/44/da/be44dad26427da684e90833f580a019b.jpg',
      date: 'September 1, 2016',
      title: 'A quick movement of the enemy will jeopardize six gunboats',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/564x/1c/06/22/1c06226ff928b2294a8082f73e27237c.jpg',
      date: 'September 1, 2016',
      title: 'Brawny gods just flocked up to quiz and vex him',
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/564x/ca/75/89/ca758941e8fad0b9cbf16e4be22b0bb8.jpg',
      date: 'September 1, 2016',
      title: 'All questions asked by five watch experts amazed the judge',
    },
  ];
  return (
    <>
    {/* //HERO IMAGES */}
    <div className="relative h-[450px] w-full overflow-hidden bg-[#e8f5f6]">
    <div className="absolute top-0 left-0 w-[850px] h-[500px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`first ${index + 1}`}
          className={`absolute left-[240px] w-[1000px] h-[450px] object-contain transition duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
    <div className="absolute bottom-[200px] w-full flex justify-between mb-4">
      <button
        className="bg-transparent hover:bg-gray-100 text-gray-800 font-bold ml-36 py-2 px-4 border border-gray-100 rounded-full shadow-md"
        onClick={handlePrevClick}
      >
        <i class="ri-arrow-left-s-line text-2xl"></i>
      </button>
      <button
        className="bg-transparent hover:bg-gray-100 text-gray-800 font-bold  mr-36 py-2 px-4 border border-gray-100 rounded-full shadow-md ml-2"
        onClick={handleNextClick}
      >
        <i class="ri-arrow-right-s-line text-2xl"></i>
      </button>
    </div>
  </div>
  {/* IMAGE */}
  <div className="container mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
  <div className="flex flex-row justify-evenly items-center bg-blue-950 p-8 w-[450px] h-[250px]">
  <div className="flex flex-col justify-center items-center">
    <h3 className="text-white  text-2xl font-bold mt-4">Little Enote</h3>
    <p className="text-white text-xl ">$39</p>
    <button className="bg-white text-blue-500 hover:bg-blue-400 text-sm font-medium rounded-md px-4 py-2 mt-4">
      Shop Now
    </button>
    </div>
    <img src={CarSeat} alt="Little Enote" className="w-50 h-[200px] right-0" />
  </div>
  <div className="flex flex-row justify-evenly items-center bg-gray-200 p-8 w-[450px] h-[250px]">
  <div className="flex flex-col justify-center items-center">
    <h3 className="text-gray-800  text-2xl font-bold mt-4">Stoke Xplory</h3>
    <p className="text-gray-800 text-xl ">$299</p>
    <button className="bg-blue-950 text-white hover:bg-blue-400 text-sm font-medium rounded-md px-4 py-2 mt-4">
      Shop Now
    </button>
    </div>
    <img src={CarSeat} alt="Little Enote" className="w-50 h-[200px] right-0" />
  </div>
  <div className="flex flex-row justify-evenly items-center bg-gray-500 p-8 w-[450px] h-[250px]">
  <div className="flex flex-col justify-center items-center">
    <h3 className="text-white  text-2xl font-bold mt-4">Minimita</h3>
    <p className="text-white text-xl ">$49</p>
    <button className="bg-white text-blue-500 hover:bg-blue-400 text-sm font-medium rounded-md px-4 py-2 mt-4">
      Shop Now
    </button>
    </div>
    <img src={CarSeat} alt="Little Enote" className="w-50 h-[200px] right-0" />
  </div>
</div>
{/* FEATURED PRODUCT */}
<div className="container mx-auto mt-[70px]">
  <div className="flex justify-center items- mb-8 gap-8">
    <button className="bg-gray-200 text-gray-700 px-4 py-3 w-[150px] rounded-3xl">Featured</button>
    <button className="bg-gray-200 text-gray-700 px-4 py-3 w-[150px] rounded-3xl">On Sale</button>
    <button className="bg-gray-200 text-gray-700 px-4 py-3 w-[150px] rounded-3xl">Bestsellers</button>
    <button className="bg-gray-200 text-gray-700 px-4 py-3 w-[150px] rounded-3xl">Latest</button>
  </div>
  <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
    {products.map((product) => (
      <div key={product.id} className="border-2 border-gray-200 p-4 rounded-xl">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Add to cart</button>
      </div>
    ))}
  </div>
  {/* CONTACT FORM */}
  <div className="bg-blue-100 mt-9 p-6 rounded-md">
      <div className=" flex items-center justify-center text-center">   
      <i class="ri-mail-send-line text-4xl text-blue-900 mx-5"></i>
        <h2 className="text-blue-900 font-bold text-3xl">Subscribe to Newsletter</h2>
      </div>
      <div className="flex justify-center my-5">
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label for="name" className="text-md">
            Name:
          </label>
          <br />
          <input
            className="border p-2 rounded-lg w-[650px]"
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <p className='text-red-500'>{errors.name}</p>}
        </div>
        <div className='mb-4'>
          <label for="email" className="text-md">
            Email:
          </label>
          <br />
          <input
            className="border p-2 rounded-lg w-[650px]"
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <p className='text-red-500'>{errors.email}</p>}
        </div>
        <button
          className="border-0 rounded shadow-lg bg-blue-500 text-white p-2 px-5 w-[150px]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    {/* BLOG */}
    <div className="container mx-auto my-9">
      <h2 className="text-2xl font-bold text-center mb-6">BLOG POSTS</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        {blogPosts.map((post) => (
          <div key={post.id} className="border border-gray-200 p-4">
            <img src={post.image} alt={post.title} className=" w-full h-52 object-cover mb-2" />
            <p className="text-sm text-gray-500">{post.date}</p>
            <h3 className="text-lg font-semibold mb-5">{post.title}</h3>
            <Link to={`/blog/${post.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">Read More</Link>
          </div>
        ))}
      </div>
    </div>
    {/* FOOTER */}
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-start">
        <Link to="/" className="flex items-center">
                <img src={BabyBliss} alt="Logo" className="h-[200px] w-[250px] " />
              </Link>
          <p>555 California str. Suite 100</p>
          <p>San Francisco, CA 94107</p>
          <p>1-800-312-2121</p>
          <p>1-800-310-1010</p>
          <p>babybliss@yahoo.com</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">PRODUCTS</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">FEATURED</h2>
          <div className="flex flex-col space-y-2">
            {products.map((product) => (
              <div key={product.id} className="flex items-center">
                <img src={product.image} alt={product.name} className="w-10 h-10 mr-2" />
                <span>{product.name}</span>
                <span className="ml-2 text-gray-500">${product.price}</span>
                {product.status && <span className="ml-2 text-red-500">{product.status}</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">ON SALE</h2>
          {/* On sale products here */}
        </div>
      </div>
    </div>
    <div className='flex justify-between my-5 border-t-2 p-5'>
    <p>© Copyright 2021. BabyBliss-Essential for babies</p>
    <div>
    <i class="ri-facebook-circle-fill text-2xl mr-2 hover:text-blue-500"></i>
    <i class="ri-instagram-fill text-2xl mr-2 hover:text-amber-800"></i>
    <i class="ri-twitter-x-fill text-2xl mr-2 hover:text-blue-950"></i>
    <i class="ri-tiktok-fill text-2xl mr-2"></i>
    </div>
    </div>
</div>
</>
  )
}

export default HomeComponent