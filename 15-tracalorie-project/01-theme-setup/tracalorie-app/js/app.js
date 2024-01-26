// Tracalorie App

// The App
class App {
  constructor() {
    this.tracker = new CalorieTracker();
  }

  _newItem() {
    console.log('new item called');
    
    // Add Meal
    this.tracker.addMeal();

    // Add workout
    this.tracker.addWorkout();
  }

  _removeItem() {
    console.log('remove item called');
    
    // Remove meal
    this.tracker.removeMeal();

    // Remove workout
    this.tracker.removeWorkout();
  }
  
  _filterItems() {
    console.log('filter item called');
  }
  
  _reset() {
    console.log('reset called');
    this.tracker.resetDay();
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
    this._renderStats();    
  }

  removeMeal() {
    console.log('Removing meal');
  }

  addWorkout(workout) {
    console.log('Adding workout');
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._renderStats();
  }

  removeWorkout() {
    console.log('Removing workout');
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
    console.log(this._totalCalories, 'total');
    console.log(this._calorieLimit, 'limit');
    console.log(remaining);
    caloriesRemainingEl.textContent = remaining;
  }

  _displayCaloriesProgress() {
    const progressEl = document.getElementById('calorie-progress');
    const percentage = (this._totalCalories / this._calorieLimit) * 100;
    console.log(percentage, 'percentage');
    const width = Math.min(percentage, 100);
    progressEl.style.width = `${width}%`;
  }

  _displayNewMeal() {
    console.log('display new meal')
  }

  _displayNewWorkout() {
    console.log('display new workout')
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
const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 200);
const lunch = new Meal('Lunch', 350);
tracker.addMeal(breakfast);
tracker.addMeal(lunch);
console.log(tracker._totalCalories, 'total calories');

const run = new Workout('Morning Run', 320);
tracker.addWorkout(run);
console.log(tracker._totalCalories, 'total calories');

console.log(tracker);
console.log(tracker._meals);
console.log(tracker._workouts);

