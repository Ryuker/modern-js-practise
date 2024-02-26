class IdeaForm {
  constructor() {
    this._formModal = document.getElementById('form-modal');
    this.render();   // Render the form elements, we need to do this before we can get a reference to 'idea-form'

    this._form = document.getElementById('idea-form');
    this.addEventListeners();
  }

  addEventListeners() {
    this._form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    
    // create object with the form element values in them (username, text, tag)
    const idea = {
      username: this._form.elements.username.value,
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
    }

    // submit idea object to API
    console.log(idea);

    // Clear the form fields
    this._form.elements.text.value = '';
    this._form.elements.tag.value = '';
    this._form.elements.username.value = '';

    // close the modal (by dispatching a custom event from the form)
    document.dispatchEvent(new Event('closemodal'));
  }

  render() {
    this._formModal.innerHTML = `
      <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input type="text" name="username" id="username" />
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