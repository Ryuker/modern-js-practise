// Tracalorie App

// The App
class App {
  constructor() {
    this._tracker = new CalorieTracker();

    document.getElementById('meal-form').addEventListener('submit', this._newItem.bind(this, 'meal'));
    document.getElementById('workout-form').addEventListener('submit', this._newItem.bind(this, 'workout'));

    document.getElementById('meal-items').addEventListener('click', this._removeItem.bind(this, 'meal'));
    document.getElementById('workout-items').addEventListener('click', this._removeItem.bind(this, 'workout'));

    document.getElementById('filter-meals').addEventListener('keyup', this._filterItems.bind(this, 'meal'));
    document.getElementById('filter-workouts').addEventListener('keyup', this._filterItems.bind(this, 'workout'));
  }


  _newItem(type, e) {
    e.preventDefault();
    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);

    // Validate inputs
    if (name.value === '' || calories.value === '' ){
      alert('Please fill in all fields');
      return;
    }

    // Create a new item and adds it to the tracker
    if (type === 'meal'){
      const meal = new Meal(name.value, +calories.value);
      this._tracker.addMeal(meal);
    } else {
      const workout = new Workout(name.value, +calories.value);
      this._tracker.addWorkout(workout);
    }
    

    // reset the name and calories field to nothing
    name.value = '';
    calories.value = '';

    // Collapse the bootstrap element
    const collapseItem  = document.getElementById(`collapse-${type}`);
    const bdCollapse = new bootstrap.Collapse(collapseItem, {
      toggle: true
    });
  }

  _removeItem(type, e) {
    console.log('remove item called');
    if (e.target.classList.contains('delete') || e.target.classList.contains('fa-xmark')) {
      if (confirm('Are you sure?')) {
        //gets the closest card element to the target 
        const id = e.target.closest('.card').getAttribute('data-id');  
        console.log(id); 
        
        // Check the type and remove the item from the respective tracker array
        type === 'meal' 
          ? this._tracker.removeMeal(id)
          : this._tracker.removeWorkout(id);

        // remove the list item from the dom
        e.target.closest('.card').remove();
      }
    }
    
    // Remove meal
    this._tracker.removeMeal();

    // Remove workout
    // this._tracker.removeWorkout();
  }
  
  _filterItems(type, e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(`#${type}-items .card`).forEach(item => {
      const name  = item.firstElementChild.firstElementChild.textContent; // gets the name element

      // display if the index exists in the filter, hide if it doesn't.
      if (name.toLowerCase().indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  _reset() {
    console.log('reset called');
    this._tracker.resetDay();
  }

  _setLimit() {
    console.log('set limit called');
  }
}

// Meal
class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

// Workout
class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}



// Calorie Tracker
class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCalorieLimit();
    this._displayCaloriesTotal();
    
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
  }

  // Public methods/API
  addMeal(meal) {
    console.log('Adding meal');
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._displayNewMeal(meal);
    this._renderStats();    
  }

  removeMeal(id) {
    console.log('Removing meal');
    const index = this._meals.findIndex(meal => meal.id === id);

    if (index !== -1) {
      const meal = this._meals[index];
      this._totalCalories -= meal.calories;
      this._meals.splice(index, 1);
      this._renderStats();
    }
  }

  addWorkout(workout) {
    console.log('Adding workout');
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._displayNewWorkout(workout);
    this._renderStats();
  }

  removeWorkout(id) {
    console.log('Removing workout');
    const index = this._workouts.findIndex(workout => workout.id === id);

    if (index !== -1) {
      const workout = this._workouts[index];
      this._totalCalories += workout.calories;
      this._workouts.splice(index, 1);
      this._renderStats();
    }
  }

  resetDay() {
    console.log('Resetting day');
  }

  setLimit() {
    console.log('Setting limit');
  }

  loadItems() {
    console.log('Loading items');
  }

  // Private methods
  _renderStats() {
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
  }

  _displayCaloriesTotal() {
    console.log('displaying calories total')
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.textContent = this._totalCalories;
  }

  _displayCalorieLimit() {
    console.log('displaying calorie limit')
    const calorieLimitEl = document.getElementById('calories-limit');
    calorieLimitEl.textContent = this._calorieLimit;
  }

  _displayCaloriesConsumed() {
    console.log('display calories consumed')
    const caloriesConsumedEl = document.getElementById('calories-consumed');
    const consumed = this._meals.reduce((total, meal) => total + meal.calories, 0);
    caloriesConsumedEl.textContent = consumed;
  }

  _displayCaloriesBurned() {
    console.log('display calories burned')
    const caloriesBurnedEl = document.getElementById('calories-burned');
    const burned = this._workouts.reduce((total, workout) => total + workout.calories, 0);
    caloriesBurnedEl.textContent = burned;

  }

  _displayCaloriesRemaining() {
    console.log('display calories remaining')
    const caloriesRemainingEl = document.getElementById('calories-remaining');
    const remaining = this._calorieLimit - this._totalCalories;
    caloriesRemainingEl.textContent = remaining;

    // color red if calories is in danger zone
    const progressEl = document.getElementById('calorie-progress');

    if (remaining <= 0) {
      caloriesRemainingEl.parentElement.parentElement.classList.remove('bg-light');
      caloriesRemainingEl.parentElement.parentElement.classList.add('bg-danger');
      
      progressEl.classList.remove('bg-succes');
      progressEl.classList.add('bg-danger');
    } else {
      caloriesRemainingEl.parentElement.parentElement.classList.remove('bg-danger');
      caloriesRemainingEl.parentElement.parentElement.classList.add('bg-light');

      progressEl.classList.remove('bg-danger');
      progressEl.classList.add('bg-succes');
      
    }
  }

  _displayCaloriesProgress() {
    const progressEl = document.getElementById('calorie-progress');
    const percentage = (this._totalCalories / this._calorieLimit) * 100;
    console.log(percentage, 'percentage');
    const width = Math.min(percentage, 100);
    progressEl.style.width = `${width}%`;
  }

  _displayNewMeal(meal) {
    console.log('display new meal')
    // Display item in respective items div
    const mealCard = document.createElement('div');
    mealCard.classList.add('card', 'my-2');
    mealCard.setAttribute('data-id', meal.id);
    mealCard.innerHTML = `
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mx-1">${meal.name}</h4>
          <div class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5">
            ${meal.calories}
          </div>
          <button class="delete btn btn-danger btn-sm mx-2">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    `;
    const mealsEl = document.getElementById(`meal-items`);
    mealsEl.appendChild(mealCard);
  }

  _displayNewWorkout(workout) {
    console.log('display new workout')
    // Display item in respective items div
    const workoutCard = document.createElement('div');
    workoutCard.setAttribute('data-id', workout.id);
    workoutCard.classList.add('card', 'my-2');

    workoutCard.innerHTML = `
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mx-1">${workout.name}</h4>
          <div class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5">
            ${workout.calories}
          </div>
          <button class="delete btn btn-danger btn-sm mx-2">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    `;
    const workoutsEl = document.getElementById(`workout-items`);
    workoutsEl.appendChild(workoutCard);

  }
}

// Static Storage
class Storage{
  static getCalorieLimit() {
    console.log('Getting calorie limit');
  }
  
  static setCalorieLimit() {
    console.log('Setting calorie limit');
  }

  static getTotalCalories() {
    console.log('Getting total calories');
  }

  static setTotalCalories() {
    console.log('Setting total calories');
  }

  static updateCalories() {
    console.log('Updating calories');
  }

  static saveMeal() {
    console.log('Saving meal');
  }

  static removeMeal() {
    console.log('Removing meal');
  }

  static saveWorkout() {
    console.log('Saving workout');
  }

  static removeWorkout() {
    console.log('Removing workout');
  }

  static getMeals() {
    console.log('Getting meals');
  }

  static getWorkouts() {
    console.log('Getting workouts');
  }

  static clearAll() {
    console.log('Clearing all');
  }
}


// Initialization
const app = new App();

// const tracker = new CalorieTracker();

// const breakfast = new Meal('Breakfast', 200);
// const lunch = new Meal('Lunch', 1050);
// tracker.addMeal(breakfast);
// tracker.addMeal(lunch);
// console.log(tracker._totalCalories, 'total calories');

// const run = new Workout('Morning Run', 320);
// tracker.addWorkout(run);
// console.log(tracker._totalCalories, 'total calories');

// console.log(tracker);
// console.log(tracker._meals);
// console.log(tracker._workouts);

