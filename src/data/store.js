const API_URL = "https://fakestoreapi.com/products";

export async function getAllProducts() {
  const res = await fetch(`${API_URL}`);

  if (!res.ok) throw Error("Failed getting Products");

  const data = await res.json();
  return data;
}

export async function getSingleProduct(id) {
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) throw Error("Failed getting singal product");

  const data = await res.json();

  return data;
}

export async function getAllCategories() {
  const res = await fetch(`${API_URL}/categories`);

  if (!res.ok) throw Error("Failed getting categories");

  const data = await res.json();

  return data;
}

export async function getSpecificCategory(cat) {
  const res = await fetch(`${API_URL}/category/${cat}`);

  if (!res.ok) throw Error("Failed getting Specific Category");

  const data = await res.json();

  return data;
}
