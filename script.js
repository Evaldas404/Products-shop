const fetchProducts = async () => {
  const response = await fetch(
    `https://681068e327f2fdac24114000.mockapi.io/products`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
fetchProducts();
