const menuList = [
    {
        category: "breakfast",
        items: [
            {
                name: "BREAKFAST BOWL",
                price: "$11.50",
                description: "Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with Lime Cream (Add egg $1)",
            },
            {
                name: "EGG SANDWICH",
                price: "$11.50",
                description: "Scrambled Eggs, Cheddar, and Choice of Bacon or Sausage on a Toasted English Muffin",
            },
            {
                name: "BREAKFAST BURRITO",
                price: "$11.50",
                description: "Scrambled Eggs, Black Beans, Cheese, and Salsa Wrapped in a Warm Flour Tortilla",
            },
            // Add more breakfast items as needed
            // 6 more items added below
            {
                name: "FRENCH TOAST",
                price: "$10.50",
                description: "Thick Slices of French Bread, Soaked in a Mixture of Eggs and Milk, Grilled Golden Brown",
            },
            {
                name: "PANCAKES",
                price: "$9.50",
                description: "Stack of Fluffy Pancakes, Served with Maple Syrup and Butter",
            },
            {
                name: "OMELETTE",
                price: "$12.50",
                description: "Customizable Omelette with Choice of Fillings: Cheese, Ham, Bell Peppers, Onions, Mushrooms",
            },
            {
                name: "GRANOLA PARFAIT",
                price: "$8.50",
                description: "Layers of Greek Yogurt, Fresh Berries, and Crunchy Granola",
            },
            {
                name: "BELGIAN WAFFLES",
                price: "$10.50",
                description: "Golden Brown Belgian Waffles, Topped with Whipped Cream and Strawberries",
            },
            {
                name: "BAGEL WITH LOX",
                price: "$13.50",
                description: "Toasted Bagel with Cream Cheese, Smoked Salmon, Sliced Tomato, and Red Onion",
            }
        ]
    },
    {
        category: "lunch",
        items: [
            {
                name: "CHICKEN CAESAR SALAD",
                price: "$14.50",
                description: "Crisp Romaine Lettuce, Grilled Chicken, Parmesan Cheese, and Caesar Dressing",
            },
            {
                name: "AVOCADO WRAP",
                price: "$12.50",
                description: "Fresh Avocado, Lettuce, Tomato, Cucumber, and Hummus Wrapped in a Flour Tortilla",
            },
            {
                name: "VEGGIE BURGER",
                price: "$13.50",
                description: "Grilled Veggie Patty with Lettuce, Tomato, Onion, and Pickles on a Whole Wheat Bun",
            },
            {
                name: "CAPRESE SANDWICH",
                price: "$11.50",
                description: "Fresh Mozzarella, Tomato, Basil, and Balsamic Glaze on Ciabatta Bread",
            },
            {
                name: "THAI PEANUT NOODLE BOWL",
                price: "$13.50",
                description: "Rice Noodles, Shredded Chicken, Vegetables, and Peanut Sauce",
            },
            {
                name: "QUINOA SALAD",
                price: "$12.50",
                description: "Quinoa, Mixed Greens, Cherry Tomatoes, Cucumber, Feta Cheese, and Balsamic Vinaigrette",
            },
            {
                name: "TURKEY CLUB SANDWICH",
                price: "$13.50",
                description: "Sliced Turkey Breast, Bacon, Lettuce, Tomato, and Mayonnaise on Toasted Bread",
            },
            {
                name: "MEDITERRANEAN WRAP",
                price: "$12.50",
                description: "Grilled Chicken, Feta Cheese, Kalamata Olives, Lettuce, Tomato, and Tzatziki Sauce in a Wrap",
            },
            {
                name: "SPINACH AND FETA STUFFED CHICKEN",
                price: "$15.50",
                description: "Chicken Breast Stuffed with Spinach and Feta Cheese, Served with Roasted Vegetables",
            }
        ]
    },
    {
        category: "dinner",
        items: [
            {
                name: "GRILLED SALMON",
                price: "$18.50",
                description: "Fresh Grilled Salmon Fillet with Lemon Butter Sauce, Served with Steamed Vegetables",
            },
            {
                name: "SPAGHETTI BOLOGNESE",
                price: "$15.50",
                description: "Classic Spaghetti Pasta with Homemade Meat Sauce and Parmesan Cheese",
            },
            {
                name: "VEGETARIAN STIR-FRY",
                price: "$16.50",
                description: "Assorted Vegetables Stir-Fried in a Tangy Sauce, Served with Steamed Rice",
            },
            {
                name: "GRILLED CHICKEN BREAST",
                price: "$17.50",
                description: "Marinated Grilled Chicken Breast with Garlic Mashed Potatoes and Seasonal Vegetables",
            },
            {
                name: "RIBEYE STEAK",
                price: "$24.50",
                description: "12 oz Ribeye Steak Cooked to Your Preference, Served with Loaded Baked Potato",
            },
            {
                name: "LOBSTER RAVIOLI",
                price: "$19.50",
                description: "Homemade Ravioli Stuffed with Lobster Meat, Served in a Creamy Tomato Sauce",
            },
            {
                name: "THAI RED CURRY",
                price: "$16.50",
                description: "Spicy Thai Red Curry with Chicken, Bell Peppers, and Bamboo Shoots, Served with Jasmine Rice",
            },
            {
                name: "BEEF WELLINGTON",
                price: "$26.50",
                description: "Tender Beef Filet Wrapped in Puff Pastry with Mushroom Duxelles, Served with Red Wine Sauce",
            },
            {
                name: "SEAFOOD PAELLA",
                price: "$22.50",
                description: "Traditional Spanish Rice Dish with Shrimp, Mussels, Clams, and Chorizo",
            }
        ]
    },
    {
        category: "desserts",
        items: [
            {
                name: "CHOCOLATE LAVA CAKE",
                price: "$8.50",
                description: "Warm Chocolate Cake with a Gooey Chocolate Center, Served with Vanilla Ice Cream",
            },
            {
                name: "CHEESECAKE",
                price: "$7.50",
                description: "Creamy New York Style Cheesecake with a Graham Cracker Crust, Topped with Fruit Compote",
            },
            {
                name: "APPLE CRISP",
                price: "$6.50",
                description: "Baked Apple Slices with Cinnamon and Oat Crumble Topping, Served with Vanilla Bean Sauce",
            },
            {
                name: "TIRAMISU",
                price: "$9.50",
                description: "Classic Italian Dessert made with Layers of Espresso-Soaked Ladyfingers and Mascarpone Cream",
            },
            {
                name: "RED VELVET CAKE",
                price: "$8.50",
                description: "Moist Red Velvet Cake Layers with Cream Cheese Frosting, Garnished with Red Velvet Crumbs",
            },
            {
                name: "LEMON MERINGUE PIE",
                price: "$7.50",
                description: "Tangy Lemon Curd in a Flaky Pie Crust, Topped with Light and Fluffy Meringue",
            },
            {
                name: "CHURROS",
                price: "$6.50",
                description: "Traditional Spanish Fried Dough Pastry coated in Cinnamon Sugar, Served with Chocolate Dipping Sauce",
            },
            {
                name: "BANANA SPLIT",
                price: "$9.50",
                description: "Scoops of Vanilla, Chocolate, and Strawberry Ice Cream with Banana, Whipped Cream, Nuts, and Cherry",
            },
            {
                name: "MOLTEN LAVA COOKIE",
                price: "$7.50",
                description: "Warm and Gooey Chocolate Chip Cookie with a Molten Chocolate Center, Served with Vanilla Ice Cream",
            }
        ]
    },
    {
        category: "drinks",
        items: [
            {
                name: "ICED LATTE",
                price: "$4.50",
                description: "Espresso with Cold Milk and Ice, Sweetened to Taste",
            },
            {
                name: "FRESHLY SQUEEZED ORANGE JUICE",
                price: "$4.50",
                description: "Freshly Squeezed Orange Juice, Made to Order",
            },
            {
                name: "BERRY BLAST SMOOTHIE",
                price: "$5.50",
                description: "Mixed Berries Blended with Yogurt and Honey, Served Ice Cold",
            },
            {
                name: "MANGO LASSI",
                price: "$4.50",
                description: "Traditional Indian Beverage made with Mango, Yogurt, and a hint of Cardamom",
            },
            {
                name: "ICED TEA",
                price: "$3.50",
                description: "Chilled Black Tea, Sweetened to Perfection, and Served over Ice",
            },
            {
                name: "MOCHA FRAPPUCCINO",
                price: "$5.50",
                description: "Blended Coffee Beverage with Chocolate, Milk, and Ice, Topped with Whipped Cream",
            },
            {
                name: "MATCHA LATTE",
                price: "$4.50",
                description: "Japanese Green Tea Powder mixed with Steamed Milk and a touch of Sweetener",
            },
            {
                name: "LEMONADE",
                price: "$3.50",
                description: "Classic Refreshing Lemonade made with Freshly Squeezed Lemons and Sugar",
            },
            {
                name: "HOT CHOCOLATE",
                price: "$4.00",
                description: "Rich and Creamy Hot Chocolate topped with Whipped Cream and Chocolate Shavings",
            }
        ]
    }
];

const putMenuItemListeners = () => {

    //create menu categories and add event listeners for click
    const menuCategories = document.querySelector('.list');
    getMenuMeals("breakfast");//by default

    menuList.forEach(item => {
        const menuCategory = document.createElement("li");
        menuCategory.classList.add("item");
        menuCategory.textContent = item.category.toUpperCase();
        menuCategory.addEventListener("click", (e) => {
            getMenuMeals(e.target.innerText); //get content of them on click
        })
        menuCategories.appendChild(menuCategory);
    });
}


const getMenuMeals = (el) => {

    let column = document.createElement("div");
    let menuFiltered = menuList.find(menu => menu.category.trim().toLowerCase() === el.trim().toLowerCase());

    menuFiltered.items.forEach(content => {

        column.classList.add("d-flex", "flex-wrap", "menu-content");

        let menuItemContent = document.createElement("div");
        menuItemContent.classList.add("menu-item-content", "col-lg-4");

        let menuPrice = document.createElement("span");
        menuPrice.textContent = content.price;
        menuPrice.classList.add("menu-item-price");

        let menuItemHeader = document.createElement("h6");
        menuItemHeader.textContent = content.name;

        let menuItemDescription = document.createElement("p");
        menuItemDescription.textContent = content.description;

        menuItemContent.appendChild(menuPrice);
        menuItemContent.appendChild(menuItemHeader);
        menuItemContent.appendChild(menuItemDescription);
        column.appendChild(menuItemContent);

        /**
            <div class="col-lg-4 menu-content">
                <div class="menu-item-content">
                    <h6>BREAKFAST BOWL</h6>
                    <p>Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with Lime Cream (Add egg $1)</p>
                </div>
                <div class="menu-item-content">
                    <h6>EGG SANDWICH</h6>
                    <p>Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                </div>
                <div class="menu-item-content">
                    <h6>BREAKFAST BURRITO</h6>
                    <p>Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, & Lime Cream</p>
                </div>
            </div>
        */


    })
    document.querySelector(".columns-container").innerHTML = column.outerHTML
}

export{
    menuList,
    putMenuItemListeners
}