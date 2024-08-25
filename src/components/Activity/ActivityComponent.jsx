import React, { useEffect, useState } from "react";
import axiosInstance from "../../Config/axiosConfig";

const ActivityComponent = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/api/category/get");
        const categories = response.data.categories;
        setCategories(categories);
        if (categories.length > 0) {
          const defaultCategory = categories[0];
          fetchProducts(defaultCategory._id);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const fetchProducts = async (categoryId) => {
    try {
      const response = await axiosInstance.get("/api/products");
      const allProducts = response.data;
      const filteredProducts = allProducts.filter((product) => product.category === categoryId);
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]); // Set products to an empty array if the request fails
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg m-8">
      <h2 className="text-3xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow hover:shadow-2xl transition-shadow duration-200"
          >
            <img
              src={product.productImage} // Assuming productImage is a URL
              alt={product.name}
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-700 mb-2">Price: ${product.price}</p>
            <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityComponent;