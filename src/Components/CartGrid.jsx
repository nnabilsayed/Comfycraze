import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const CartGrid = () => {
  const { cart } = useCart();

  return (
    <div className="flex justify-center pt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
        {cart.map((item) => (
          <div
            key={item.id}
            className="card w-full md:col-span-1 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <Link to={`/products/${item.id}`}>
              <img
                className="rounded-xl h-64 md:h-48 w-full object-cover"
                src={item.attributes.image}
                alt=""
              />
            </Link>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">
                {item.attributes.title}
              </h2>
              <h2 className="flex justify-center">${item.attributes.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartGrid;
