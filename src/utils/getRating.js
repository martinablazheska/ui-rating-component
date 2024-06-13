function getRating() {
  const rating = sessionStorage.getItem("rating");
  return rating ? Number(rating) : rating;
}

export default getRating;
