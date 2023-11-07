import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://strapi-store-server.onrender.com/api/products"
        );

        const responseData = response.data?.data || [];

        setAllProducts(responseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter products based on search query
    const filtered = allProducts.filter((product) =>
      product.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [searchQuery, allProducts]);

  return (
    <div className="flex flex-col items-center pt-20 min-h-screen">
      {!loading && (
        <div className="pb-5">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered w-72 "
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
        {loading ? (
          <div className="flex max-auto justify-center">
            <button className="btn btn-square">
              <span className="loading loading-spinner"></span>
            </button>
          </div>
        ) : (
          filteredProducts.map((item) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <div className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
                <img
                  className="rounded-xl h-64 md:h-48 w-full object-cover"
                  src={item.attributes?.image}
                  alt=""
                />
                <div className="card-body items-center text-center">
                  <h2 className="card-title capitalize tracking-wider">
                    {item.attributes?.title}
                  </h2>
                  <h2 className="flex justify-center">
                    ${item.attributes?.price}
                  </h2>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
