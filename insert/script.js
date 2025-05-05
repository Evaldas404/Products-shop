import { insertProduct } from "../utils/fetch.js";
import { inputRequirements } from "../utils/validations.js";

const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const locationInput = document.getElementById("location");
const imageUrlInput = document.getElementById("image-url");
const descriptionInput = document.getElementById("description");
const message = document.getElementById("message");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", async () => {
  const data = {
    title: titleInput.value,
    price: +priceInput.value,
    location: locationInput.value,
    imageUrl: imageUrlInput.value,
    description: descriptionInput.value,
  };

  const requirementsViolation = inputRequirements(data);
  if (requirementsViolation) {
    message.style.color = "red";
    message.textContent = "There was an input violation";
    return;
  }

  const product = await insertProduct(data);

  if (product) {
    message.style.color = "green";
    message.textContent = "Product was added successfully";

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 2000);
  }
});
