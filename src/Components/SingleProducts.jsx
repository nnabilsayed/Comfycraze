import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext"; // Import the useCart hook

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addToCart } = useCart(); // Get the addToCart function from the useCart hook

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `https://strapi-store-server.onrender.com/api/products/${id}`
          );
          setProduct(response.data.data);
          setLoading(false);
        } else {
          console.error("productId is undefined");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product); // Add the selected product to the cart
  };

  return (
    <section className="flex items-center   max-w-6xl mx-auto min-h-screen ">
      <div>
        <div className="text-md breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <button className="btn btn-square">
              <span className="loading loading-spinner"></span>
            </button>
          </div>
        ) : (
          <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
            {product.attributes && product.attributes.image && (
              <img
                src={product.attributes.image}
                alt={product.attributes.title}
                className="w-96 h-96 object-cover rounded-lg lg:w-full"
              />
            )}
            <div className="text-white">
              {product.attributes && (
                <>
                  <h1 className="capitalize text-3xl font-bold">
                    {product.attributes.title}
                  </h1>
                  <h4 className="text-xl text-neutral-content font-bold mt-2">
                    {product.attributes.company}
                  </h4>
                  <p className="mt-3 text-xl">${product.attributes.price}</p>
                  <p className="mt-6 leading-8">
                    {product.attributes.description}
                  </p>
                  <div className="mt-6">
                    <div className="mt-2"></div>
                  </div>
                </>
              )}
              <button onClick={handleAddToCart} className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleProduct;
