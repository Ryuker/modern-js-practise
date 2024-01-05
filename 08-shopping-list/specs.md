# Shopping List Specs

- [x] Add items to list via form
- [x] Remove items from list by clicking the "X" button
- [x] Clear all items with "clear" button
- [ ] Filter the items by typing in the filter field
- [ ] Add localStorage to persist items
- [ ] Click on an item to put into "edit mode" and add to form
- [ ] Update item
- [ ] Deploy to Netlify


# LocalStorage / session Storage explained
- Property on the 'Window' interface that allows us to access a Storage Object
- Data is stored in the browser
- Data is stored as key/value pairs and values are strings (Can not store objects)

localStorage and sessionStorage have the same API. The difference is that localStorage does not expire, while sessionStorage only lasts until the page is closed.

## localStorage Methods
- localStorage.setItem('name', 'Brad')  // Set a value with a key
- localStorage.getItem('name');         // Get a value using the key
- localStorage.removeItem('name');      // Remove item using the key
- localStorage.clear();



 