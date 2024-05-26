import { formatCurrency } from "../../helper/helper";
import { useCart } from "./CartContext";

export default function CartTableItems({ cartProducts }) {
  const { deleteProduct } = useCart();

  return (
    <tr>
      <td className="border border-blue-gray-900 px-4 py-2">
        {cartProducts.title}
      </td>
      <td className="border border-blue-gray-900 px-4 py-2">
        {formatCurrency(cartProducts.price)}
      </td>
      <td className="border border-blue-gray-900 px-4 py-2">
        <img className="w-10 m-auto" src={cartProducts.image} alt="" />
      </td>
      <td className="border border-blue-gray-900 px-4 py-2 text-center">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          type="button"
          onClick={() => deleteProduct(cartProducts.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
