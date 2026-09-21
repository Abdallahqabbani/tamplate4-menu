const menuItems = [
  {
    name: "Truffle Smash Burger",
    description: "Double beef, truffle sauce, cheddar",
    price: "6.50 JD",
    category: "burgers",
    tag: "Best Seller",
    image: "images/burger1.webp",
  },

  {
    name: "Classic Burger",
    description: "Beef, lettuce, tomato, cheese, house sauce",
    price: "4.50 JD",
    category: "burgers",
    image: "images/burger2.webp",
  },

  {
    name: "Double Smash",
    description: "Double beef, cheddar, pickles, special sauce",
    price: "5.50 JD",
    category: "burgers",
    tag: "Popular",
    image: "images/burger3.webp",
  },

  {
    name: "Chicken Burger",
    description: "Crispy chicken, lettuce, cheese, house sauce",
    price: "4.75 JD",
    category: "burgers",
    image: "images/burger4.webp",
  },

  {
    name: "Margherita",
    description: "Tomato, mozzarella, basil, olive oil",
    price: "4.50 JD",
    category: "pizza",
    image: "images/pizza1.webp",
  },

  {
    name: "Pepperoni",
    description: "Tomato sauce, mozzarella, pepperoni",
    price: "5.50 JD",
    category: "pizza",
    tag: "Popular",
    image: "images/pizza2.webp",
  },

  {
    name: "Chicken Pizza",
    description: "Chicken, mozzarella, mushrooms, herbs",
    price: "5.75 JD",
    category: "pizza",
    image: "images/pizza3.webp",
  },

  {
    name: "Crispy Chicken",
    description: "Golden crispy chicken, house seasoning",
    price: "5.00 JD",
    category: "chicken",
    tag: "Best Seller",
    image: "images/chicken1.webp",
  },

  {
    name: "Chicken Strips",
    description: "Crispy chicken strips with dipping sauce",
    price: "4.00 JD",
    category: "chicken",
    image: "images/chicken2.webp",
  },

  {
    name: "Loaded Fries",
    description: "Fries, cheddar, beef, special sauce",
    price: "3.00 JD",
    category: "sides",
    image: "images/fries1.webp",
  },

  {
    name: "Classic Fries",
    description: "Golden fries with house seasoning",
    price: "2.00 JD",
    category: "sides",
    image: "images/fries2.webp",
  },

  {
    name: "Fresh Lemonade",
    description: "Fresh lemon, mint, chilled water",
    price: "2.00 JD",
    category: "drinks",
    tag: "Fresh",
    image: "images/drink1.webp",
  },

  {
    name: "Iced Tea",
    description: "Fresh brewed tea, lemon, ice",
    price: "1.75 JD",
    category: "drinks",
    image: "images/drink2.webp",
  },

  {
    name: "Chocolate Cake",
    description: "Rich chocolate cake with chocolate cream",
    price: "3.50 JD",
    category: "desserts",
    image: "images/dessert1.webp",
  },
];

const categoryNames = {
  burgers: "Burgers",

  pizza: "Pizza",

  chicken: "Chicken",

  sides: "Sides",

  drinks: "Drinks",

  desserts: "Desserts",
};

const menuList = document.getElementById("menuList");

const categoryButtons = document.querySelectorAll(".category-button");
function createMenuItem(item) {
  const article = document.createElement("article");
  article.className = "menu-item";

  article.innerHTML = `
        <img class="menu-item-image" src="${item.image}" alt="${item.name}" loading="lazy">

        <div class="menu-item-main">
            <div class="menu-item-name">
                <h4>${item.name}</h4>
                ${item.tag ? `<span class="menu-tag">${item.tag}</span>` : ""}
            </div>

            <p class="menu-description">
                ${item.description}
            </p>
        </div>

        <div class="menu-price">
            ${item.price}
        </div>
    `;

  return article;
}
function renderMenu(category = "all") {
  menuList.innerHTML = "";

  let filteredItems = menuItems;

  if (category !== "all") {
    filteredItems = menuItems.filter((item) => item.category === category);
  }

  if (category === "all") {
    const categories = [
      "burgers",
      "pizza",
      "chicken",
      "sides",
      "drinks",
      "desserts",
    ];

    categories.forEach((categoryNameKey) => {
      const categoryItems = menuItems.filter(
        (item) => item.category === categoryNameKey,
      );

      if (categoryItems.length === 0) {
        return;
      }

      const categorySection = document.createElement("section");

      categorySection.className = "menu-category";

      const heading = document.createElement("div");

      heading.className = "menu-category-title";

      heading.innerHTML = `

                <h3>
                    ${categoryNames[categoryNameKey]}
                </h3>

                <span></span>

            `;

      categorySection.appendChild(heading);

      categoryItems.forEach((item) => {
        categorySection.appendChild(createMenuItem(item));
      });

      menuList.appendChild(categorySection);
    });

    return;
  }

  const categorySection = document.createElement("section");

  categorySection.className = "menu-category";

  const heading = document.createElement("div");

  heading.className = "menu-category-title";

  heading.innerHTML = `

        <h3>
            ${categoryNames[category]}
        </h3>

        <span></span>

    `;

  categorySection.appendChild(heading);

  filteredItems.forEach((item) => {
    categorySection.appendChild(createMenuItem(item));
  });

  menuList.appendChild(categorySection);
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.category;

    renderMenu(category);
  });
});

renderMenu();
