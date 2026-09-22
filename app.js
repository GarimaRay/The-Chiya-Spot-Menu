const MENU = {
  branches: [
    { id: "golfutar", name: "Golfutar", note: "Source: golfutar.pdf", live: true },
    { id: "bhaktapur", name: "Bhaktapur", note: "Source: Bhaktapur.pdf", live: true },
    { id: "putlisadak", name: "Putalisadak", note: "Source: putlisadak.pdf", live: true },
    { id: "boudha", name: "Boudha", note: "Source: Boudha.pdf", live: true },
    { id: "kumaripati", name: "Kumaripati", note: "Source: Kumaripati.pdf", live: true },
    { id: "branch-5", name: "Branch 5", note: "PDF pending", live: false }
  ],
  categories: [
    {
      id: "chiya",
      title: "Chiya",
      image: "assets/chiya.jpg",
      accent: "#9e2f45",
      items: [
        ["Chotu's Special", "Our special rich and creamy milk tea with the blend of 8 spices.", "140", { prices: { kumaripati: "130" } }],
        ["Nut Tea", "Tea with lots of nuts for your indulgence.", "160"],
        ["Karak Masala", "Strong flavored tea with spices to refresh you.", "100"],
        ["Cutting Chai", "A quick intense shot of chiya.", "100", { prices: { kumaripati: "90" } }],
        ["Chocolate Tea", "Tea for all the chocolate lovers.", "150"],
        ["Pink Tea", "A perfect balance of nature's sweetness and nourishment.", "160"],
        ["Black Masala", "Strong black tea brewed with aromatic spices.", "80"]
      ]
    },
    {
      id: "coffee-bakery",
      title: "Coffee & Bakery",
      image: "assets/chiya.jpg",
      accent: "#c9865d",
      items: [
        ["Instant Cold Coffee", "", "250"],
        ["Hot Lemon", "With honey / without honey.", "120/100"],
        ["Lemon Tea", "", "80"],
        ["Hot Chocolate", "", "250"],
        ["Muffin", "", "110"],
        ["Choco-Donut", "", "180"],
        ["Cookies", "With / without ice-cream.", "160/110"],
        ["Brownie", "With / without ice-cream.", "295/260"],
        ["Choco / Plain Croissant", "", "295/195"]
      ]
    },
    {
      id: "chiso",
      title: "Chiso",
      image: "assets/chiso.jpg",
      accent: "#1fa6a4",
      items: [
        ["Milkshake", "Strawberry / Vanilla / Blueberry / Oreo.", "350"],
        ["Mojito", "Grape / Cranberry / Orange / Mint.", "250"],
        ["Iced Tea", "Peach / Lemon.", "280"],
        ["Lemonade", "Mint / Strawberry / Blueberry.", "230"],
        ["Kiwi Burst", "", "250"],
        ["Lassi", "Indrachok ko local lassi.", "250", { branches: ["kumaripati"] }]
      ]
    },
    {
      id: "light-crunchy",
      title: "Light & Crunchy",
      image: "assets/snacks.jpg",
      accent: "#b95f43",
      items: [
        ["Chau-Chau Sadheko", "Chicken / Veg. Fusion of homemade spices, flavorful aloo dum, crunchy chips, and zesty masala tossed with Wai Wai.", "190"],
        ["French Fries", "Cheese onion oregano / Peri Peri onion. Crispy golden fries tossed in your choice of seasoning.", "295"],
        ["Mini Samosa", "Chicken / Veg. A crispy bite filled with flavorful chicken mince or potato and cheese.", "300/220"],
        ["Chicken Aloo Pakoda", "Crispy, deep-fried bites of spiced chicken and potato.", "300", { branches: ["golfutar", "bhaktapur", "putlisadak", "boudha"] }],
        ["Pakoda", "Veg / chicken. Crispy, deep-fried bites of spiced chicken and potato.", "190/280", { branches: ["kumaripati"] }],
        ["Hot and Spicy Sausage", "Sausage skewered and coated in a special homemade spice blend.", "250"],
        ["Crispy Corn", "Lightly fried corn kernels tossed with aromatic spices.", "150", { branches: ["kumaripati"] }]
      ]
    },
    {
      id: "sharing",
      title: "Sharing Is Caring",
      image: "assets/snacks.jpg",
      accent: "#0d696b",
      items: [
        ["Nachos and Salsa", "Crispy corn and kodo (millet) chips paired with refreshing salsa.", "380"],
        ["Loaded Chips and Dip", "Crunchy Nepali chips served with a rich, creamy dip topped with savory cheese and onions.", "280"],
        ["Crispy Chilly Potato", "Crispy potato slices tossed in spices and sauces.", "320", { branches: ["golfutar", "bhaktapur", "putlisadak", "boudha"] }],
        ["Loaded Fries with Chicken", "Golden fries and chicken tenders tossed in peri peri and smothered in creamy sauce.", "480", { branches: ["golfutar", "bhaktapur", "putlisadak", "boudha"] }],
        ["Timmur Alu", "Potatoes tossed in traditional Nepali spices, delicately infused with a hint of timmur.", "180", { branches: ["kumaripati"] }],
        ["Nepali Style Hot Wings", "Crispy fried chicken wings coated in fiery Nepali style hot sauce.", "450"],
        ["Aloo Keema Chop", "Crispy patties filled with spiced potato and minced meat.", "280"]
      ]
    },
    {
      id: "hearty",
      title: "Hearty & Filling",
      image: "assets/hearty.jpg",
      accent: "#6f2035",
      items: [
        ["Momo", "Chicken.", "320"],
        ["Club Sandwich", "Chicken, egg, lettuce, tomato, and mayonnaise in three slices of bread.", "420", { prices: { kumaripati: "380" } }],
        ["Mushroom Chilly", "Crispy mushroom slices tossed in a mouthwatering blend of spices and sauces.", "180", { branches: ["kumaripati"] }],
        ["Paneer Folded Wrap", "Roti wrap loaded with seasoned paneer, melted cheese, tomatoes, and onions.", "290", { branches: ["kumaripati"] }],
        ["Crispy Chilly Potato", "Crispy potato slices tossed in a mouthwatering blend of spices and sauces.", "295", { branches: ["kumaripati"] }],
        ["Katti Roll", "Chicken / paneer wrapped in roti with veggies and tangy sauce.", "320", { prices: { kumaripati: "295/315" } }],
        ["Bhatti Style Chowmein", "Veg / Buff / Chicken. Smokey, spicy, and local with black chickpeas and potato.", "290/320", { branches: ["golfutar", "bhaktapur", "putlisadak", "boudha"] }],
        ["Fried Rice", "Veg / chicken. Taichin rice tossed with spices, egg, chicken or veg, and chilly oil.", "290/320", { branches: ["bhaktapur"] }]
      ]
    },
    {
      id: "extras",
      title: "Extras",
      image: "assets/extras.jpg",
      accent: "#8a4937",
      items: [
        ["Hookah", "", "600"],
        ["Cloud Hookah", "", "800", { branches: ["golfutar", "bhaktapur", "putlisadak", "boudha"] }],
        ["Additional Coal", "Normal / Cloud.", "50/80", { prices: { kumaripati: "50" } }],
        ["Mineral Water", "", "45"]
      ]
    }
  ]
};

const branchSelect = document.querySelector("#branchSelect");
const branchLabel = document.querySelector("#branchLabel");
const branchGrid = document.querySelector("#branchGrid");
const categoryTabs = document.querySelector("#categoryTabs");
const menuRoot = document.querySelector("#menuRoot");
const searchInput = document.querySelector("#searchInput");

let currentBranch = getInitialBranch();
let currentCategory = "all";

function getInitialBranch() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("branch") || window.location.hash.replace("#", "");
  return MENU.branches.find((branch) => branch.id === requested && branch.live)?.id || "golfutar";
}

function priceFor(item, branchId) {
  const override = item[3]?.prices?.[branchId];
  return override || item[2];
}

function isItemVisibleForBranch(item, branchId) {
  const allowedBranches = item[3]?.branches;
  return !allowedBranches || allowedBranches.includes(branchId);
}

function renderBranchControls() {
  branchSelect.innerHTML = MENU.branches
    .map((branch) => `<option value="${branch.id}" ${branch.live ? "" : "disabled"}>${branch.name}${branch.live ? "" : " - pending"}</option>`)
    .join("");
  branchSelect.value = currentBranch;

  branchGrid.innerHTML = MENU.branches
    .map((branch) => {
      const classes = ["branch-card", branch.id === currentBranch ? "is-active" : "", branch.live ? "" : "is-pending"].join(" ");
      return `<button class="${classes}" data-branch="${branch.id}" ${branch.live ? "" : "disabled"}>
        <strong>${branch.name}</strong>
        <span>${branch.note}</span>
      </button>`;
    })
    .join("");

  branchGrid.querySelectorAll("button[data-branch]").forEach((button) => {
    button.addEventListener("click", () => setBranch(button.dataset.branch));
  });
}

function renderCategoryTabs() {
  const tabs = [{ id: "all", title: "All" }, ...MENU.categories];
  categoryTabs.innerHTML = tabs
    .map((tab) => `<button class="tab" data-category="${tab.id}" role="tab" aria-selected="${tab.id === currentCategory}">${tab.title}</button>`)
    .join("");

  categoryTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.category;
      renderCategoryTabs();
      renderMenu();
    });
  });
}

function renderMenu() {
  const branch = MENU.branches.find((entry) => entry.id === currentBranch);
  const query = searchInput.value.trim().toLowerCase();
  branchLabel.textContent = `${branch.name} Branch`;

  const categories = MENU.categories
    .filter((category) => currentCategory === "all" || category.id === currentCategory)
    .map((category) => {
      const items = category.items
        .filter((item) => isItemVisibleForBranch(item, currentBranch))
        .filter((item) => [item[0], item[1], priceFor(item, currentBranch)].join(" ").toLowerCase().includes(query));
      return { ...category, items };
    })
    .filter((category) => category.items.length > 0);

  if (!categories.length) {
    menuRoot.innerHTML = `<div class="empty">No matching menu items for ${branch.name}.</div>`;
    return;
  }

  menuRoot.innerHTML = categories
    .map((category) => `<article class="category" id="${category.id}" style="--accent: ${category.accent}">
      <div class="category__media" style="--image: url('${category.image}')">
        <h2>${category.title}</h2>
      </div>
      <div class="items">
        ${category.items.map((item) => `<div class="item">
          <div>
            <h3>${item[0]}</h3>
            ${item[1] ? `<p>${item[1]}</p>` : ""}
          </div>
          <div class="price">Rs. ${priceFor(item, currentBranch)}</div>
        </div>`).join("")}
      </div>
    </article>`)
    .join("");
}

function setBranch(branchId) {
  const branch = MENU.branches.find((entry) => entry.id === branchId && entry.live);
  if (!branch) return;
  currentBranch = branch.id;
  const url = new URL(window.location.href);
  url.searchParams.set("branch", currentBranch);
  window.history.replaceState({}, "", url);
  renderBranchControls();
  renderMenu();
}

branchSelect.addEventListener("change", (event) => setBranch(event.target.value));
searchInput.addEventListener("input", renderMenu);

renderBranchControls();
renderCategoryTabs();
renderMenu();
