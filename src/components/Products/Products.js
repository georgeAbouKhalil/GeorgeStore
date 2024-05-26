import { useEffect, useState } from "react";
import { getAllProducts } from "../../data/store";
import Spinner from "../Spinner/Spinner";
import Error from "../../Error/Error";
import ProductCart from "./ProductCart";
import FilterTabs from "./FilterTabs";

export default function Products() {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  //better to use the function in store.js to get all category but Ill do it like that beacuse we have only 4 category
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  useEffect(() => {
    const fetchAllItem = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setItems(data);
        setLoading(false);
      } catch (err) {
        setError("Can't get products. Please try again later.");
        setLoading(false);
      }
    };

    fetchAllItem();
  }, []);

  if (error) return <Error>Error: {error}</Error>;

  if (loading) return <Spinner />;

  const filteredProducts =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        {/* Filter by Category */}

        <FilterTabs
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Product Grid and its filtered Products by category */}
        <div className="grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCart product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
