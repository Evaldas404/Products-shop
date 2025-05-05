export const inputRequirements = (data) => {
  let isError = false;

  if (isNaN(data.price)) {
    console.log("Price should be a number");
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
    isError = true;
  }

  if (data.title.length > 25) {
    console.log("Title must be 25 characters or fewer");
    isError = true;
  }

  const description = data.description?.trim() || "";
  const wordCount = data.description.split(/\s+/).length;
  if (wordCount < 20) {
    console.log("Description must be at least 20 words");
    isError = true;
  }
  if (description.length > 1500) {
    console.log("Description must be no more than 1500 characters");
  }

  const imgUrlRegex =
    /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?.*)?$/i;
  if (!imgUrlRegex.test(data.imageUrl.trim())) {
    console.log("Not an image URL");
    isError = true;
  }

  return isError;
};
