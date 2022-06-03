const foods = [
  {
    name: "Turkey Egg Omlet",
    calories: 420,
    category: "Breakfast",
  },
  {
    name: "Fruit Plate",
    calories: 120,
    category: "Breakfast",
  },
  {
    name: "Vanilla Latte",
    calories: 60,
    category: "Breakfast",
  },
  {
    name: "Harvest Salad",
    calories: 550,
    category: "Lunch",
  },
  {
    name: "Meatloaf",
    calories: 640,
    category: "Lunch",
  },
  {
    name: "Grilled Chicken Breast",
    calories: 200,
    category: "Lunch",
  },
  {
    name: "Beef Stick",
    calories: 90,
    category: "Snacks",
  },
  {
    name: "Protein drink",
    calories: 160,
    category: "Snacks",
  },
  {
    name: "Eggplant Lasagna",
    calories: 480,
    category: "Dinner",
  },
  {
    name: "Cherry popsicle",
    calories: 25,
    category: "Dinner",
  },
];

const categories = [
  { image: "breakfast.jpg", name: "Breakfast" },

  { image: "lunch.jpg", name: "Lunch" },

  { image: "snacks.jpg", name: "Snacks" },

  { image: "dinner.jpg", name: "Dinner" },
];

function createCard(meal) {
  const html = `<div class="card">
    <img src="${meal.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.name} </h5>
      <p class="${meal.category}">
      ${createFoodUlByMealName(meal.name)}
      </p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>`;
  return html;
}

function createFoodLi(name, calories) {
  const html = `<li>${name} ${calories} Cal</li>`;
  return html;
}
function createFoodUlByMealName(mealName) {
  // use meal name to get list of foods for that meal
  const mealFoods = getMealFoods(foods, mealName);
  // for each meal food, create HTML (just like how we did for cards - add to a string)
  let html = ``;
  mealFoods.forEach((food) => {
    const foodhtml = createFoodLi(food.name, food.calories);
    html = html + foodhtml;
  });
  const finishedHtml = `<ul>${html}</ul>`;
  return finishedHtml;
}

function run() {
  //Get the element from the page
  const elem = document.getElementById("card-group");
  //Create a card for each meal
  let html = ``;
  categories.forEach((meal) => {
    const cardHtml = createCard(meal);
    html = html + cardHtml;
  });
  //Insert the generated html into the page
  elem.innerHTML = html;
}

run();

function getMealFoods(foodArray, mealName) {
  return foodArray.filter((foodObject) => {
    return foodObject.category === mealName;
  });
}

// insert text to html including the sum
function dailyTotalCal() {
  let sum = 0;
  foods.forEach((element) => {
    sum += element.calories;
  });

  const html = `
    <h4 id="dailytotals">Daily Totals</h4>
    <h5 class="totalcal">Total Calories: ${sum} Cal</h5>`;
  return html;
}

// create html for the total calories
function run1() {
  const elem = document.getElementById("dailytotals");
  let html = ``;
  const dailyTot = dailyTotalCal();
  html = html + dailyTot;
  elem.innerHTML = html;
}

run1();

// make my save button dynamic and input
//save the data given to the variables foods with push method
// show the saved objects to the matching list of food category

const foodInputName = document.getElementById(`Name`).value;
