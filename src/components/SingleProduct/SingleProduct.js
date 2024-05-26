import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct as getSingleProductApi } from "../../data/store";
import Error from "../../Error/Error";
import Spinner from "../Spinner/Spinner";
import { RatingBar } from "../../helper/helper";
import { useCart } from "../Cart/CartContext";
import { getCurrentUser } from "../../data/user";

export default function SingleProduct() {
  const [proSingle, setProSingle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = getCurrentUser();
    setUserName(user?.name);
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        setLoading(true);
        const sinProduct = await getSingleProductApi(id);
        setProSingle(sinProduct);
        setLoading(false);
      } catch (err) {
        setError("Can't get product. Please try again later.");
        setLoading(false);
      }
    };

    fetchSingleProduct();
  }, [id]);

  if (error) {
    return <Error>Error: {error}</Error>;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col sm:flex-row">
        <div className="md:w-1/2 sm:m-auto m-auto w-[70%] p-4 sm:p-6 ">
          <img
            src={proSingle.image}
            alt={proSingle.title}
            className="w-full h-auto"
          />
        </div>
        <div className="sm:w-1/2 p-4 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {proSingle.title}
          </h2>
          <p className="mt-2 text-base text-gray-500">
            {proSingle.description}
          </p>
          <div className="mt-4">
            <span className="text-lg font-semibold text-gray-900">
              ${proSingle.price}
            </span>
            <span className="ml-2 text-sm text-gray-500">
              ({proSingle.category})
            </span>
          </div>
          <div className="mt-4">
            <span className="text-lg font-semibold text-gray-900">
              Rating: {proSingle.rating.rate}
            </span>
            <span className="ml-2 text-sm text-gray-500">
              ({proSingle.rating.count} ratings)
              {RatingBar(proSingle.rating.rate)}
            </span>
          </div>
          {userName ? (
            <button
              className="ml-2 bg-gray-900 mt-4 text-sm rounded-md py-2 px-4 text-white text-center"
              onClick={() => {
                addToCart(proSingle);
              }}
            >
              add to cart
            </button>
          ) : (
            <div
              className=" mt-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
              role="alert"
            >
              <p className="font-bold">Warning</p>
              <p>You Need To Login To Access</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
