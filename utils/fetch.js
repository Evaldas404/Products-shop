const webUrl = "https://681068e327f2fdac24114000.mockapi.io";

export const fetchProducts = async () => {
  const response = await fetch(`${webUrl}/products`);
  const data = await response.json();
  return data;
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${webUrl}/products/${id}`);
  const data = await response.json();
  return data;
};

export const deleteProductById = async (id) => {
  const response = await fetch(`${webUrl}/products/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export const insertProduct = async (data) => {
  const response = await fetch(`${webUrl}/products`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  const products = await response.json();
  return products;
};
