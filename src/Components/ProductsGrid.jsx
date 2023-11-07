import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://strapi-store-server.onrender.com/api/products?featured=true"
        );
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center pt-20">
      {loading ? (
        <button className="btn btn-square">
          <span className="loading loading-spinner"></span>
        </button>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {data.map((item) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <div className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
                <img
                  className="rounded-xl h-64 md:h-48 w-full object-cover"
                  src={item.attributes.image}
                  alt=""
                />
                <div className="card-body items-center text-center">
                  <h2 className="card-title capitalize tracking-wider">
                    {item.attributes.title}
                  </h2>
                  <h2 className="flex justify-center">
                    ${item.attributes.price}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
