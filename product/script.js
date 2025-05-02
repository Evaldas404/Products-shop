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

const fetchProductById = async (id) => {
  const response = await fetch(
    `https://681068e327f2fdac24114000.mockapi.io/products/${id}`
  );
  const data = await response.json();
  return data;
};

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

const deleteProductById = async (id) => {
  const response = await fetch(
    `https://681068e327f2fdac24114000.mockapi.io/products/${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();
  return data;
};

deleteBtn.addEventListener("click", async () => {
  const product = await deleteProductById(id);
  if (product) {
    confirmation.textContent = "Product was deleted successfully";
  }
});
