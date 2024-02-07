// Queues
class Queue {
  constructor(){
    this._items = [];
    this._count = 0;
    this._front = 0;
  }

  // add item to the front, shift the rest to the right
  enqueue(item) {
    this._items[this._count] = item;
    this._count++;
  }

  // returns first item that was enqueed, shifts the rest to the right?
  dequeue() {
    if(this.isEmpty()) return ' undefined';

    const item = this._items[this._front];
    for (let i = this._front; i < this._count-1; i++) {
      this._items[i] = this._items[i + 1]; // Shift everything to the left
    }

    this._count--;
    this._items.length = this._count;

    return item;
  }
  
  // return item in the front
  peek() {
    if (this.isEmpty()) return 'No items in the Queue';

    return this._items[this._front];
  }

  length() {
    return this._count - this._front;
  }

  isEmpty() {
    return this._count === 0;
  }
}

const q = new Queue();

console.log(q);
console.log('Front Item: ', q.peek());
console.log('Queue Length: ', q.length());

q.enqueue('Item 1');
q.enqueue('item 2');
q.enqueue('item 3');

console.log('Front Item: ', q.peek());
console.log(q._items);
console.log('Queue Length: ', q.length());

q.dequeue();
q.dequeue();

console.log('Front Item: ', q.peek());
console.log('Queue Length: ', q.length());