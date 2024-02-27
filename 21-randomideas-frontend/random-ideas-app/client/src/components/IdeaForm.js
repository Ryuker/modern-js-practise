import IdeasApi from "../services/ideasApi";
import IdeaList from "./IdeaList";

class IdeaForm {
  constructor() {
    this._formModal = document.getElementById('form-modal');
    this._ideaList = new IdeaList();
    this.render();   // Render the form elements, we need to do this before we can get a reference to 'idea-form'

    this._form = document.getElementById('idea-form');
    this.addEventListeners();
  }

  addEventListeners() {
    this._form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  async handleSubmit(e) {
    e.preventDefault();

    // validation
    if (!this._form.elements.text.value || !this._form.elements.tag.value || !this._form.elements.username.value) {
     alert('Please enter all fields');
     return;   
    }
    
    // Save user to local storage
    localStorage.setItem('username', this._form.elements.username.value);

    // create object with the form element values in them (username, text, tag)
    const idea = {
      username: this._form.elements.username.value,
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
    }

    // submit idea object to API
    const newIdea = await IdeasApi.createIdea(idea);

    // Add idea to list
    this._ideaList.addIdeaToList(newIdea.data.data);

    // Clear the form fields
    this._form.elements.text.value = '';
    this._form.elements.tag.value = '';
    this._form.elements.username.value = '';
    this.render();

    // close the modal (by dispatching a custom event from the form)
    document.dispatchEvent(new Event('closemodal'));
  }

  render() {
    this._formModal.innerHTML = `
      <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input type="text" name="username" id="username" value="${localStorage.getItem('username') ? localStorage.getItem('username') : ""}"/>
        </div>
        <div class="form-control">
          <label for="idea-text">What's Your Idea?</label>
          <textarea name="text" id="idea-text"></textarea>
        </div>
        <div class="form-control">
          <label for="tag">Tag</label>
          <input type="text" name="tag" id="tag" />
        </div>
        <button class="btn" type="submit" id="submit">Submit</button>
      </form>`;
  }

}

export default IdeaForm;