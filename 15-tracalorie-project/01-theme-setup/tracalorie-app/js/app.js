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
  }

  // Public methods
  addMeal(meal) {
    console.log('Adding meal');
    this._meals.push(meal);
    this._totalCalories += meal.calories;    
  }

  removeMeal() {
    console.log('Removing meal');
  }

  addWorkout(workout) {
    console.log('Adding workout');
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
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
  _displayCaloriesTotoal() {
    console.log('displaying calories total')
  }

  _displayCaloryLimit() {
    console.log('displaying calory limit')
  }

  _displayCaloriesConsumed() {
    console.log('display calories consumed')
  }

  _displayCaloriesBurned() {
    console.log('display calories burned')
  }

  _displayCaloriesBurned() {
    console.log('display calories burned')
  }

  _displayCaloriesRemaining() {
    console.log('display calories remaining')
  }

  _displayNewMeal() {
    console.log('display new meal')
  }

  _displayNewWorkout() {
    console.log('display new workout')
  }

  _renderStats() {
    console.log('Rendering stats')
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

const breakfast = new Meal('Breakfast', 400);
tracker.addMeal(breakfast);
console.log(tracker._totalCalories, 'total calories');

const run = new Workout('Morning Run', 300);
tracker.addWorkout(run);
console.log(tracker._totalCalories, 'total calories');

console.log(tracker);
console.log(tracker._meals);
console.log(tracker._workouts);

