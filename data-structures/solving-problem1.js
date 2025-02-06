/*

Problem: Implement a stack with push, pop, peek, and is_empty methods using a linked list

Constraints

If we pop on an empty stack, do we return None? Yes

Can we assume this fits memory?Yes

-------------------------------------------------------------------------------------------------------------------------------------------------------

Node = nó

Assimilação: Imagine um vagão de trem que guarda sua carga (data) e é ligado por um gancho (next)  

- Caso base: Se next não for fornecido é null.

*/

class Node {
  
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    this.top = new Node(data, this.top);
  }

  pop() {
    if (this.top === null) return null
    
    const data = this.top.data;
    /*  a variável 'data' existe aqui pra pegar o valor que vai ser removido */
    this.top = this.top.next; 
    /* o termo corretos seria desvincilhar o nó, repare, só é feito a troca aqui */
    return data;  // retorno do nó valor removido
  }

  peek() {
    if(this.top) {
      return this.top.data
    } else {
      null
    }
  }

  _isEmpty() {
    return this.top ? this.top.data : null
  }

}

const stack = new Stack();
stack.push(10)
stack.push(20)

const removedValue= stack.pop();

console.log('Pilha: ', stack)
console.log('Valor removido: ', removedValue)
