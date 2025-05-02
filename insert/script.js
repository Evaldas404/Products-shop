const title = document.getElementById("title");
const price = document.getElementById("price");
const location = document.getElementById("location");
const imageUrl = document.getElementById("image-url");
const description = document.getElementById("description");
const message = document.getElementById("message");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error");

const insertProduct = async () => {
  const response = await fetch(
    `https://681068e327f2fdac24114000.mockapi.io/products`,
    {
      method: "POST",
      body: JSON.stringify(),
      header: { "Content-Type": "application/json" },
    }
  );
  const product = await response.json();
  return product;
};

submitButton.addEventListener("click", async () => {
  const data = {
    title: title.value,
    price: price.value,
    location: location.value,
    imageUrl: imageUrl.value,
    description: description.value,
  };

  const inputRequirements = () => {
    let isError = false;

    if (isNaN(data.price)) {
      console.log("Price should be a number");
      errorMessage.textContent = "Price should be a number";
      isError = true;
    }

    if (
      !data.title ||
      !data.price ||
      !data.location ||
      !data.imageUrl ||
      !data.description
    ) {
      console.log("Make sure all windows are filled");
      errorMessage.textContent = "Make sure all windows are filled";
      isError = true;
    }
    return isError;
  };

  const requirementsViolation = inputRequirements(data);
  if (requirementsViolation) {
    return;
  }

  const product = await insertProduct(data);

  if (product) {
    message.textContent = "Product was added successfully";
  }
});
