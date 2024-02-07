// Stacks - Last In - First Out
class Stack {
  constructor(){
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  // removed the last items in the array returns it
  pop() {
    if (this.isEmpty()){
      return 'Underflow';
    }

    // get the item
    const item = this._items[this._count - 1];

    // reduce the count
    this._count--;

    // populate items array with items remaining up to count
    for (let i = this._count; i < this._items.length; i++) {
      // Shift the items to the left in the arrray
      this._items[i] = this._items[i + 1]; 
    }

    // change the lenght of the array to the reduced count
    this._items.length = this._count;

    return item;
  }

  clear() {
    this._items = [];
    this._count = 0;
  }

  // returns the last item in the stack
  peek(){
    if (this.isEmpty()) return 'No items in the stack';
    return this._items[this._count - 1];
  }

  length(){
    return this._count;
  }

  isEmpty(){
    return this._count === 0;
  }
}

const stack = new Stack();

stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');


console.log(stack, 'before pop');

stack.pop()


console.log(stack, 'after pop');
console.log(stack.peek(), '- Top item');
console.log(stack.length(), ' - Stack Length');

stack.clear();
console.log(stack.peek(), ' - after clear');
console.log(stack.length(), 'stack length');

