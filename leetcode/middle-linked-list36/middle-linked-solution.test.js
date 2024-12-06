const middleNode = require('./middle-linked-solution')

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function createLinkedList(values) {
  let head = null;
  let current = null;

  for (let value of values) {
    const newNode = new ListNode(value);
    if (!head) {
      head = newNode;
      current = newNode;
    } else {
      current.next = newNode;
      current = newNode;
    }
  }

  return head;
}


describe('middleNode', () => {
  test('return the value that is at middle of linked list', () => {
    const head = createLinkedList([1, 2, 3, 4])
    const result = middleNode(head).val
    expect(result).toBe(3)
  })

  test('if the head is null the return should be null too', () => {
    const head = null
    const result = middleNode(head)
    expect(result).toBeNull()
  })
});