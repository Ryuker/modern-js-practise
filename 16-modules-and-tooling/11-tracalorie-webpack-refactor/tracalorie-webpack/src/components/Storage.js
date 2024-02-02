// Static Storage
export default class Storage{
  static getCalorieLimit(defaultLimit = 2000) {
    console.log('Getting calorie limit');
    let calorieLimit;
    if (localStorage.getItem('calorieLimit') === null) {
      calorieLimit = defaultLimit;
    } else {
      calorieLimit = +localStorage.getItem('calorieLimit');
    }

    return calorieLimit;
  }
  
  static setCalorieLimit(calorieLimit) {
    console.log('Setting calorie limit');
    localStorage.setItem('calorieLimit', calorieLimit);
  }

  static getTotalCalories(defaultCalories = 0) {
    console.log('Getting total calories');
    let totalCalories;
    if (localStorage.getItem('totalCalories') === null) {
      totalCalories = defaultCalories;
    } else {
      totalCalories = +localStorage.getItem('totalCalories');
    }
    return totalCalories;
  }

  static updateTotalCalories(calories) {
    console.log('Setting total calories');
    localStorage.setItem('totalCalories', calories);
  }

  static saveMeal(meal) {
    console.log('Saving meal');
    const meals = Storage.getMeals();
    meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static removeMeal(id) {
    console.log('Removing meal');
    const meals = Storage.getMeals();
    meals.forEach((meal, index) => {
      if (meal.id === id){
        meals.splice(index, 1);
      }
    });
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static saveWorkout(workout) {
    console.log('Saving workout');
    const workouts = Storage.getWorkouts();
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static removeWorkout(id) {
    console.log('Removing workout');
    const workouts = Storage.getWorkouts();
    workouts.forEach((workout, index) => {
      if (workout.id === id){
        workouts.splice(index, 1);
      }
    });
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static getMeals() {
    console.log('Getting meals');
    let meals;
    if (localStorage.getItem('meals') === null) {
      meals = [];
    } else {
      meals = JSON.parse(localStorage.getItem('meals'));
    }
    return meals;
  }

  static getWorkouts() {
    console.log('Getting workouts');
    let workouts;
    if (localStorage.getItem('workouts') === null) {
      workouts = [];
    } else {
      workouts = JSON.parse(localStorage.getItem('workouts'));
    }
    return workouts;
  }

  static clearAll() {
    console.log('Clearing all');
    localStorage.removeItem('totalCalories');
    localStorage.removeItem('meals');
    localStorage.removeItem('workouts');

    // if you want to clear the full storage
    // localStorage.clear();
  }
}