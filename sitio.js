const group = document.querySelector(".filters");
const cards = [...document.querySelectorAll(".product[data-category]")];
const buttons = [...group.querySelectorAll("button")];
const status = document.querySelector("#filter-status");

group.hidden = false;
group.addEventListener("click", (event) => {
  const selected = event.target.closest("button[data-filter]");
  if (!selected) return;

  const category = selected.dataset.filter;
  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button === selected));
  });

  let visible = 0;
  cards.forEach((card) => {
    const belongsToCategory = card.dataset.category.split(" ").includes(category);
    card.hidden = category !== "todos" && !belongsToCategory;
    if (!card.hidden) visible += 1;
  });
  status.textContent = visible === 1 ? "1 modelo visible" : `${visible} modelos visibles`;
});
