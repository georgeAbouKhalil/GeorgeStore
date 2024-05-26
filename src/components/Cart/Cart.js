/* eslint-disable jsx-a11y/alt-text */
import toast from "react-hot-toast";
import { getCurrentUser } from "../../data/user";
import { useCart } from "./CartContext";
import CartTableItems from "./CartTableItems";
import emailjs from "emailjs-com";

export default function Cart() {
  const { cart, clearCart } = useCart();
  const userEmail = getCurrentUser()?.email;

  const service_gjlboca = "service_gjlboca";
  const template_dsuzfay = "template_dsuzfay";
  const publicKey = "qIknmf8R03TJTj9tO";

  const sendEmail = () => {
    emailjs
      .send(
        service_gjlboca,
        template_dsuzfay,
        {
          to_email: `${userEmail}`,
        },
        publicKey
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("Email sent successfully check mail/spam");
        clearCart();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <form>
      <div className="px-4 py-8 sm:px-8 bg-slate-100">
        <div className="overflow-x-auto">
          <table className="text-center min-w-full border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr>
                <th className="border border-blue-gray-900 px-4 py-2">Title</th>
                <th className="border border-blue-gray-900 px-4 py-2">Price</th>
                <th className="border border-blue-gray-900 px-4 py-2">Image</th>
                <th className="border border-blue-gray-900 px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartProduct) => (
                <CartTableItems
                  cartProducts={cartProduct}
                  key={cartProduct.id}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="gap-7">
          <button
            type="button"
            onClick={clearCart}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Clear Cart
          </button>
          <button
            type="button"
            onClick={sendEmail}
            className="mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Buy
          </button>
        </div>
      </div>
    </form>
  );
}
