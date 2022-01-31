// Soldier
class Soldier {
  constructor(healthParam, strengthParam) {
    this.health = healthParam;
    this.strength = strengthParam;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damageParam){
    this.damage = damageParam;
    this.health = this.health - damageParam;
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameParam, healthParam, strengthParam) {
    super(healthParam, strengthParam);
    this.name = nameParam;
  }

  receiveDamage(damageParam){
    this.health = this.health - damageParam;

    if (this.health > 0 ){
      return `${this.name} has received ${damageParam} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {

  constructor(healthParam, strengthParam) {
    super(healthParam, strengthParam);
  }

  receiveDamage(damageParam){
    this.health = this.health - damageParam;

    if (this.health > 0 ){
      return `A Saxon has received ${damageParam} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {

  vikingArmy = [];
  saxonArmy = [];

  newViking = new Viking()
  addViking(newViking){
    this.vikingArmy.push(newViking);
  }

  newSaxon = new Viking()
  addSaxon(newSaxon){
    this.saxonArmy.push(newSaxon);
  }

  vikingAttack() {
    // make Saxon receiveDamage() equal to the strength of a Viking
    // Saxon.receiveDamage(damage) = this.Viking.strength

    //remove Saxon if dead
    if (this.Saxon.health === 0){
      // this.saxonArmy.pop()
    }

    // return result of calling receiveDamage() of a Saxon with the strength of a Viking

  }

  saxonAttack(){
    // make a Viking receiveDamage() equal to the strength of a Saxon

    // remove dead vikings from the army

    // return result of calling receiveDamage() of a Viking with the strength of a Saxon
    
  }

  showStatus(){

    // return "Vikings have won the war of the century!", if the Saxons array is empty
    /*
    if (this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    }*/

    // return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty
    /*
    if (this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    }*/

    // return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
