import Storage from "./Storage";

// Calorie Tracker
export default class CalorieTracker {
  constructor() {
    this._calorieLimit = Storage.getCalorieLimit();
    this._totalCalories = Storage.getTotalCalories();
    this._meals = Storage.getMeals();
    this._workouts = Storage.getWorkouts();

    this._displayCalorieLimit();
    this._displayCaloriesTotal();
    
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();

    document.getElementById('limit').value = this._calorieLimit;
  }

  // Public methods/API
  addMeal(meal) {
    console.log('Adding meal');
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    Storage.updateTotalCalories(this._totalCalories);
    Storage.saveMeal(meal);
    this._displayNewMeal(meal);
    this._renderStats();    
  }

  removeMeal(id) {
    console.log('Removing meal');
    const index = this._meals.findIndex(meal => meal.id === id);

    if (index !== -1) {
      const meal = this._meals[index];
      this._totalCalories -= meal.calories;
      Storage.updateTotalCalories(this._totalCalories);
      this._meals.splice(index, 1);
      Storage.removeMeal(id);
      this._renderStats();
    }
  }

  addWorkout(workout) {
    console.log('Adding workout');
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    Storage.updateTotalCalories(this._totalCalories);
    Storage.saveWorkout(workout);
    this._displayNewWorkout(workout);
    this._renderStats();
  }

  removeWorkout(id) {
    console.log('Removing workout');
    const index = this._workouts.findIndex(workout => workout.id === id);

    if (index !== -1) {
      const workout = this._workouts[index];
      this._totalCalories += workout.calories;
      Storage.updateTotalCalories(this._totalCalories);
      this._workouts.splice(index, 1);
      Storage.removeWorkout(id);
      this._renderStats();
    }
  }

  resetDay() {
    console.log('Resetting day');
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
    Storage.clearAll();
    this._renderStats();  
  }

  setLimit(calorieLimit) {
    console.log('Setting limit');
    this._calorieLimit = calorieLimit;
    Storage.setCalorieLimit(calorieLimit);
    this._displayCalorieLimit();
    this._renderStats();
  }

  loadItems() {
    console.log('Loading items');
    this._meals.forEach(meal => this._displayNewMeal(meal));
    this._workouts.forEach(workout => this._displayNewWorkout(workout));
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