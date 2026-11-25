const filters = document.querySelector(".filters");
const cards = [...document.querySelectorAll(".product[data-category]")];
const buttons = [...filters.querySelectorAll("button")];
const status = document.querySelector("#filter-status");
const more = document.querySelector("#more-models");
const pageSize = 12;
let activeCategory = "todos";
let visibleLimit = pageSize;

function updateCatalog() {
  let matches = 0;
  const newlyVisible = [];
  cards.forEach((card) => {
    const belongs = activeCategory === "todos" || card.dataset.category.split(" ").includes(activeCategory);
    if (belongs) matches += 1;
    const show = belongs && matches <= visibleLimit;
    if (show && card.hidden) newlyVisible.push(card);
    card.hidden = !show;
  });

  const visibleCount = Math.min(visibleLimit, matches);
  if (matches === 1) {
    status.textContent = "1 modelo";
  } else if (visibleCount === matches) {
    status.textContent = `${matches} modelos`;
  } else {
    status.textContent = `${visibleCount} de ${matches} modelos`;
  }
  more.hidden = visibleCount === matches;
  return newlyVisible;
}

filters.hidden = false;
status.hidden = false;
updateCatalog();

filters.addEventListener("click", (event) => {
  const selected = event.target.closest("button[data-filter]");
  if (!selected || selected.dataset.filter === activeCategory) return;

  activeCategory = selected.dataset.filter;
  visibleLimit = pageSize;
  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button === selected));
  });
  updateCatalog();
});

more.addEventListener("click", () => {
  visibleLimit += pageSize;
  const [firstNewCard] = updateCatalog();
  firstNewCard?.querySelector(".quote").focus();
});
