const productsWrapper = document.getElementById("products-warpper");

const fetchProducts = async () => {
  const response = await fetch(
    `https://681068e327f2fdac24114000.mockapi.io/products`
  );
  const data = await response.json();
  return data;
};

const buildProducts = (product) => {
  product.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = element.title;

    const price = document.createElement("h2");
    price.classList.add("price")
    price.textContent = element.price + "€";

    const img = document.createElement("img");
    img.src = element.imageUrl;

    card.append(title,price, img);
    productsWrapper.append(card);
  });
};

const productsDisplay = async () => {
  const product = await fetchProducts();
  console.log(product);
  buildProducts(product);
};
productsDisplay();
