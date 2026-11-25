const filters = document.querySelector(".filters");
const filterButtons = filters.querySelectorAll("button");
const galleryCards = document.querySelectorAll(".card[data-category]");

filters.hidden = false;
filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;

  const category = button.dataset.filter;
  filterButtons.forEach((item) => {
    item.setAttribute("aria-pressed", String(item === button));
  });
  galleryCards.forEach((card) => {
    card.hidden = category !== "todos" && card.dataset.category !== category;
  });
});
