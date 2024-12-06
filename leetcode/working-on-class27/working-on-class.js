// Vamos imaginar que você está desenvolvendo um jogo simples de RPG, onde os jogadores criam personagens com diferentes atributos.

// Cenário:  Você precisa criar personagens com nome, nível, força, agilidade e saúde. Cada personagem deve ter a capacidade de atacar e defender.


const log = console.log

function Character(name, level, force, speed, health) {
  this.name = name
  this.level = level
  this.force = force
  this.speed = speed
  this.health = health
}

/* In this case below always use anonymous function,
cause it were arrow function the code wil break because 'this' scope is from global object instead  
this from function scope  */ 

Character.prototype.isAttack = function() {
  const damage = Math.floor(this.force * (this.level / 10))
  log(`${this.name} ataca com ${damage} de dano!`)
}

Character.prototype.isDefending = function() {
  const defense = Math.floor(this.speed * (this.level / 10))
  log(`${this.name} defende com ${defense} de defesa`)
} 

const onCreateWarrior = new Character('Guerreiro', 15, 12, 8, 70)

const onCreateWizard = new Character("Mago", 23, 15, 21, 95)

onCreateWarrior.isAttack() 

onCreateWizard.isDefending()