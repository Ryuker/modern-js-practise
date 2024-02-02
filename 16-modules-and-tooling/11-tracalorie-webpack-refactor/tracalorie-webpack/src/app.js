import '@fortawesome/fontawesome-free/js/all';
import { Modal, Collapse } from 'bootstrap';
import CalorieTracker from './components/Tracker';
import {Meal, Workout} from './components/Item';

import './css/bootstrap.css';
import './css/style.css';

// The App
class App {
  constructor() {
    this._tracker = new CalorieTracker();
    this._loadEventListeners();

    this._tracker.loadItems();
  }

  _loadEventListeners() {
    document.getElementById('meal-form').addEventListener('submit', this._newItem.bind(this, 'meal'));
    document.getElementById('workout-form').addEventListener('submit', this._newItem.bind(this, 'workout'));

    document.getElementById('meal-items').addEventListener('click', this._removeItem.bind(this, 'meal'));
    document.getElementById('workout-items').addEventListener('click', this._removeItem.bind(this, 'workout'));

    document.getElementById('filter-meals').addEventListener('keyup', this._filterItems.bind(this, 'meal'));
    document.getElementById('filter-workouts').addEventListener('keyup', this._filterItems.bind(this, 'workout'));

    document.getElementById('reset').addEventListener('click', this._reset.bind(this));
    
    document.getElementById('limit-form').addEventListener('submit', this._setLimit.bind(this));
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
    const bdCollapse = new Collapse(collapseItem, {
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
    // clean up the tracker property values
    this._tracker.resetDay();
    
    // reset the dom items
    document.getElementById('meal-items').innerHTML = ''; 
    document.getElementById('workout-items').innerHTML = ''; 
    document.getElementById('filter-meals').value = '';
    document.getElementById('filter-workouts').value = '';
  }

  _setLimit(e) {
    e.preventDefault();
    console.log('set limit called');
    const limit = document.getElementById('limit');
    if (limit.value === ''){
      alert('Please add a limit');
      return;
    }

    this._tracker.setLimit(+limit.value);

    limit.value = '';

    // close the modal
    const modalEl = document.getElementById('limit-modal');
    const modal = Modal.getInstance(modalEl);
    modal.hide();
  }
}

// Initialization
const app = new App();


