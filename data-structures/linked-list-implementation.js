class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  append(data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
    } else {
      let curent = this.head

      // O bloco while se avança enquanto existir o próximo, quando não houver (next for null) atualiza curent.next = newNode.
      
      while (curent.next) { curent = curent.next }

      curent.next = newNode
    }

    this.size++
  }

  remove(index) {
    if (index < 0 || index >= this.size) return null

    let current = this.head

    if (index === 0) {
      this.head = current.next
    } else {
      let previous = null 
      let count = 0

      while (count < index) {
        previous = current
        current = current.next
        count++
      }

      previous.next = current.next
    }

    this.size--
    return current.data
  }

  display() {
    let current = this.head;
    let elements = [];

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.join(' -> '));  // Exibe a lista no formato "valor1 -> valor2 -> ..."
  }
}



const list = new LinkedList()

list.append(12)
list.append(29)
list.append(44)
list.append(10)
list.append(76)
list.append(45)

list.remove(3)

list.display() // Output: 12 -> 29 -> 44 -> 76 -> 45