import { Link } from "react-router-dom";
import { RatingBar, formatCurrency } from "../../helper/helper";
import { useCart } from "../Cart/CartContext";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../data/user";

export default function ProductCart({ product }) {
  const { addToCart } = useCart();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = getCurrentUser();
    setUserName(user?.name);
  }, []);

  return (
    <div
      key={product.id}
      className="product-card bg-white p-4 rounded shadow flex flex-col"
      data-category={product.category}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-2 rounded"
      />
      <h3 className="text-lg font-bold">{product.title}</h3>

      <div className="mt-auto">
        <span className="justify-center flex">
          {RatingBar(product.rating.rate)}
        </span>
        <p className="text-gray-600">{formatCurrency(product.price)}</p>
      </div>
      <div className="flex gap-5 justify-center">
        {userName ? (
          <button
            onClick={() => addToCart(product)}
            className="bg-[#1e293b] px-5 py-1 my-3 rounded text-white hover:bg-sky-800"
          >
            Add to Cart
          </button>
        ) : (
          ""
        )}
        <Link to={`/product/${product?.id}`}>
          <button className="bg-[#1e293b] px-5 py-1 my-3 rounded text-white hover:bg-sky-800">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
}
