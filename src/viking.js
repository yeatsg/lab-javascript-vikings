// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack (){
    return this.strength
  }

  receiveDamage(damage){
    return this.health =- damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(name, health, strength)
  };

  receiveDamage(damage){
    this.health =- damage;
    if (this.health <= 0 ){
      return `${this.name} has died in combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
  }

  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength)
  }

  receiveDamage(damage){
    this.health =- damage;
    if (this.health <= 0 ){
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    let i = Math.floor(Math.random() * this.saxonArmy.length);
    let j = Math.floor(Math.random() * this.vikingArmy.length);
    this.saxonArmy[i].receiveDamage(this.vikingArmy[j].strength);
    if (this.saxonArmy[i].health <= 0){
      this.saxonArmy.splice(i, 1);
    }
  }

  saxonAttack(damage){
    let j = Math.floor(Math.random() * this.saxonArmy.length);
    let i = Math.floor(Math.random() * this.vikingArmy.length);
    this.vikingArmy[i].receiveDamage(this.saxonArmy[j].strength);
    if (this.vikingArmy[i].health <= 0){
      this.vikingArmy.splice(i, 1);
    };

//     showStatus() {
//       if (this.vikingArmy.length && this.saxonArmy.length){
//         return 'Vikings and Saxons are still in the thick of battle.'
//       } else if (this.vikingArmy.length === 0){
//         return 'Saxons have won the war of the century!'
//       } else {
//         return 'Vikings have won the war of the century!'
//       }
//     } 
// }


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
