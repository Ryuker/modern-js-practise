// Tracalorie App

// The App
class App {
  constructor() {
    this.tracker = new CalorieTracker();
  }

  _newItem() {
    console.log('new item called');
  }

  _removeItem() {
    console.log('remove item called');
  }
  
  _filterItems() {
    console.log('filter item called');
  }
  
  _reset() {
    console.log('reset called');
  }

  _setLimit() {
    console.log('set limit called');
  }
}

// Meal
class Meal {
  constructor() {
    this._id;
    this._name;
    this._calories;
  }
}

// Workout
class Workout {
  constructor() {
    this._id;
    this._name;
    this._calories;
  }
}



// Calorie Tracker
class CalorieTracker {
  constructor() {
    _calorieLimit;
    _totalCalories;
    _meals;
    _workouts;
  }

  // Public methods
  addMeal() {
    console.log('Adding meal');
  }

  removeMeal() {
    console.log('Removing meal');
  }

  addWorkout() {
    console.log('Adding workout');
  }

  removeWorkout() {
    console.log('Removing workout');
  }

  resetDay() {
    console.log('Resetting day');
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
}

