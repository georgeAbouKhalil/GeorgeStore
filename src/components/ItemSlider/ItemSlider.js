import { Link } from "react-router-dom";
import { formatCurrency, truncateText } from "../../helper/helper";

/* eslint-disable jsx-a11y/alt-text */
export default function ItemSlider({ item }) {
  return (
    <div className="bg-slate-500 text-center ">
      <div
        className="text-center bg-white"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <img className="mx-auto h-52" width="50%" src={item?.image} />
        <div>{truncateText(item?.description, 80)}</div>
        <div className="md:space-x-10 space-x-4">
          <Link to={`/product/${item?.id}`}>
            <button className="bg-[#1e293b] px-5 py-1 my-3 rounded text-white hover:bg-sky-800">
              More Info
            </button>
          </Link>
          <span>{formatCurrency(item?.price)}</span>
        </div>
      </div>
    </div>
  );
}
