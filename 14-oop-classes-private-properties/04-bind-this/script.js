// Bind() and Defining this
class App {
  constructor () {
    this.serverName = 'localhost';

    // document
    //   .querySelector('button')
    //   .addEventListener('click', this.getServerName); 
      // this points to the element it's on (in this case the button)

      document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this));
      // This binds it to call the method on the class instead instead of calling the method on the element (which doesn't have the class method)
    
  }

  getServerName() {
    console.log(this);
  }
}

const app = new App();
app.getServerName();