import { fetchProductById, deleteProductById } from "../utils/fetch.js";

const title = document.getElementById("title");
const price = document.getElementById("price");
const city = document.getElementById("city");
const description = document.getElementById("description");
const image = document.getElementById("image");
const deleteBtn = document.getElementById("delete-btn");
const confirmation = document.getElementById("confirmation");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

console.log(id);

const insertDataToScreen = (product) => {
  title.textContent = product.title;
  price.textContent = product.price + "€";
  city.textContent = product.location;
  description.textContent = product.description;
  image.src = product.imageUrl;
};

const productsDisplay = async () => {
  const product = await fetchProductById(id);
  console.log(product);
  insertDataToScreen(product);
};
productsDisplay();

deleteBtn.addEventListener("click", async () => {
  const product = await deleteProductById(id);
  if (product) {
    confirmation.textContent = "Product was deleted successfully";

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 2000);
  }
});
