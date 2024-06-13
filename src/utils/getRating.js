function getRating() {
  return Number(sessionStorage.getItem("rating"));
}

export default getRating;
