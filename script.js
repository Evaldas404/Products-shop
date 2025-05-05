import { fetchProducts } from "./utils/fetch.js";

const productsWrapper = document.getElementById("products-warpper");

const buildProducts = (product) => {
  product.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    }
  });
  product.forEach((element) => {
    const card = document.createElement("a");
    card.href = `./product/index.html?id=${element.id}`;
    card.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = element.title;

    const price = document.createElement("h2");
    price.classList.add("price");
    price.textContent = element.price + "€";

    const img = document.createElement("img");
    img.src = element.imageUrl;

    card.append(title, price, img);
    productsWrapper.append(card);
  });
};

const productsDisplay = async () => {
  const product = await fetchProducts();
  console.log(product);
  buildProducts(product);
};
productsDisplay();
