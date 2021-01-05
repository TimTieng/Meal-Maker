// Objects practice

// Create a "Menu" object with properties and methods
const menu = {
    // Menu = Top level object
    // Courses is an object within the menu object that contains information
    _courses : {
        // _courses has these properties and methods 
        appetizers: [],             // Empty array that will be used to store populated data
        mainDishes: [],                  // Empty array that will be used to store main dish info
        desserts: [],               // Same as above 
    },
    // Getter methods to retrieve object property information
    get appetizers() {
        return this._courses.appetizers;        // Chaining required since _courses is a sub-object of the Menu Object
    },
    get mainDishes() {
        return this._courses.mainDishes;
    },
    get desserts() {
        return this._courses.desserts;
    },
    // Setter Methods to set the values of the properties - set propertyName(propertyVal)
    set appetizers(appetizers) {
        this.appetizers = appetizers;
    },
    set mainDishes(mainDishes) {
        this.mainDishes = mainDishes;
    },
    set desserts(desserts) {
        this.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mainDishes: this.mainDishes,
            desserts: this.desserts
        };
    },
    // addDishToCourse will be used add values to the _courses object
    addDishToCourse(courseName, dishName, dishPrice) {
        // The Method creates and object, then pushes valus of the object to the _courses Object
        const dish = {
            name: dishName,
            price: dishPrice
        };
        // once the dish object is created, push dish values to the courses object
        return this._courses[courseName].push(dish);
    },
    // generateRandomDishFromCourses will be used to create a randomized meal to simulate customer choices
    generateRandomDishFromCourses(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        let appetizer = this.generateRandomDishFromCourses("appetizers");
        let dish = this.generateRandomDishFromCourses("mainDishes");
        let dessert = this.generateRandomDishFromCourses("desserts");
        let totalPrice = appetizers.price + mainDishes.price + desserts.price;

        let mealInformation = `You ordered ${appetizer} as an appetizer, ${dish} as your main meal, and ${dessert} as your dessert. Your bill is ${totalPrice} dollars.`;
        return mealInformation;
    }
};
// Seed Data into arrays - Appetizers, mainDishes, Desserts

menu.addDishToCourse("appetizers", "Mozzarella Sticks", 6);
menu.addDishToCourse("appetizers", "Jalapeno Poppers", 8);
menu.addDishToCourse("appetizers", "Buffalo Wings", 12);
menu.addDishToCourse("appetizes", "Samper", 12);

menu.addDishToCourse("mainDishes", "Ribeye Steak with a Baked Potato", 23);
menu.addDishToCourse("mainDishes", "Chicken Alfredo", 18);
menu.addDishToCourse("mainDishes", "Seafood Medely", 30);
menu.addDishToCourse("mainDishes", "Deluxe Burger", 15);

menu.addDishToCourse("desserts", "Warm Brownie with Ice Cream", 10);
menu.addDishToCourse("desserts", "Tiramisu", 11);
menu.addDishToCourse("desserts", "Milkshake", 8);
menu.addDishToCourse("desserts", "Cheesecake", 10);

let customerMeal1 = menu.generateRandomMeal();
console.log(customerMeal1);

let customerMeal2 = menu.generateRandomMeal();
console.log(customerMeal2);