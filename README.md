# 🍔 THE MENU
### Modern & Responsive Digital Restaurant Menu

A modern, elegant, and fully responsive digital restaurant menu developed using **HTML5, CSS3, and Vanilla JavaScript**.

**The Menu** provides an intuitive browsing experience where visitors can explore food categories, discover dishes, view prices, and access restaurant information through a clean, minimalist interface.

The project demonstrates practical front-end development skills, including dynamic content rendering, DOM manipulation, interactive filtering, responsive design, and structured JavaScript data management.

---

## 🌐 Live Demo

**[View Live Website](https://abdallahqabbani.github.io/tamplate4-menu/)**

**[Explore the Menu](https://abdallahqabbani.github.io/tamplate4-menu/#menu)**

---

## ✨ Key Features

- **Responsive Design:** Adapts to desktop, tablet, and mobile screen sizes.
- **Dynamic Menu Rendering:** Automatically generates menu items using JavaScript.
- **Interactive Category Filtering:** Filters dishes instantly without reloading the page.
- **Six Food Categories:** Burgers, Pizza, Chicken, Sides, Drinks, and Desserts.
- **Detailed Product Information:** Displays food images, names, descriptions, and prices.
- **Featured Product Labels:** Highlights selected items with Best Seller, Popular, and Fresh tags.
- **Lazy Loading Images:** Loads menu images efficiently to reduce unnecessary initial loading.
- **Smooth Scrolling:** Enables smooth navigation to the menu section.
- **Restaurant Information:** Displays location, opening hours, and social media links.
- **Minimalist UI:** Uses elegant typography, balanced spacing, and a consistent visual identity.
- **Vanilla JavaScript:** Built without JavaScript frameworks or external libraries.

---

## 🍽️ Menu Categories

The menu is organized into six categories:

| Category | Description |
|---|---|
| 🍔 Burgers | Classic and specialty burgers |
| 🍕 Pizza | Freshly prepared pizza selections |
| 🍗 Chicken | Crispy chicken dishes |
| 🍟 Sides | Appetizers and side dishes |
| 🥤 Drinks | Refreshing beverages |
| 🍰 Desserts | Sweet treats |

Visitors can select **All** to browse the complete menu or choose an individual category to display relevant dishes.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and page content |
| CSS3 | Responsive layouts, styling, and visual design |
| JavaScript (ES6+) | Dynamic rendering, DOM manipulation, and category filtering |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Pages | Static website deployment |

---

## 📁 Project Structure

```text
the-menu/
│
├── index.html          # Main website structure
├── style.css           # Styling and responsive layouts
├── script.js           # Menu data and interactive functionality
│
├── images/             # Restaurant and food images
│   ├── burger1.webp
│   ├── burger2.webp
│   ├── pizza1.webp
│   ├── chicken1.webp
│   └── ...
│
└── README.md           # Project documentation
```

---

## ⚙️ How It Works

### 1. Data Management

All menu products are stored in a JavaScript array called `menuItems`.

Each product contains its name, description, price, category, image path, and an optional featured tag.

This structure makes the menu easy to maintain and update without modifying the HTML layout.

### 2. Dynamic Menu Rendering

The `renderMenu()` function dynamically generates menu sections and product elements.

When the **All** category is selected, products are grouped and displayed under their corresponding category headings.

### 3. Interactive Filtering

Category buttons use JavaScript event listeners to detect user selections.

The selected category is used to filter the `menuItems` array, and the displayed products are updated dynamically without refreshing the page.

### 4. Responsive User Interface

CSS media queries adapt the layout to different screen sizes, ensuring that the menu remains readable and accessible on desktop and mobile devices.

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Abdallahqabbani/tamplate4-menu.git
```

### Run Locally

1. Open the cloned project folder.
2. Make sure the `images` directory is present.
3. Open `index.html` in your browser.
4. Explore the menu and test the category filters.

**No installation, package manager, or build process is required.**

---

## 🎨 Design Highlights

The website follows a minimalist, restaurant-inspired design approach.

- Neutral and warm background colors
- Elegant serif typography
- High-quality food imagery
- Clean product cards and category sections
- Subtle borders and visual separators
- Consistent spacing and alignment
- Responsive layouts for smaller screens
- Clear navigation and readable product information

The goal is to create a visually appealing interface without unnecessary complexity.

---

## 🔧 Customization

Menu content can be updated directly in `script.js`.

For example, a menu item follows this structure:

```javascript
{
  name: "Classic Burger",
  description: "Beef, lettuce, tomato, cheese, house sauce",
  price: "4.50 JD",
  category: "burgers",
  image: "images/burger2.webp"
}
```

To add a new item, simply insert another object into the `menuItems` array using one of the existing category names.

The website automatically displays the new item in the appropriate category.

---

## 📚 Skills Demonstrated

This project demonstrates experience with:

- Semantic HTML development
- Responsive CSS design
- JavaScript arrays and objects
- DOM manipulation
- Event handling
- Array filtering and iteration
- Dynamic HTML generation
- Organizing front-end code
- Static website deployment
- Git and GitHub workflows

---

## 👨‍💻 Developer

**abdallah qabbani**

Software Engineering Student | Full Stack Web Development

**GitHub:** [Abdallahqabbani](https://github.com/Abdallahqabbani)

---

## 📄 License

No license has been specified for this project.

---

**Built with HTML, CSS, and JavaScript.**
