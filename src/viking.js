// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
    return
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {

  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []    
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  
  attackFrom(offender){
    const offenderArmy = (offender === 'Vikings')?this.vikingArmy:this.saxonArmy
    const defenderArmy = (offender === 'Vikings')?this.saxonArmy:this.vikingArmy

    let defenderDamaged = Math.round(Math.random()*(defenderArmy.length-1))
    let offenderAttacker = Math.round(Math.random()*(offenderArmy.length-1))

    let attackOutcome = defenderArmy[defenderDamaged].receiveDamage(offenderArmy[offenderAttacker].attack())
    if (defenderArmy[defenderDamaged].health <= 0){
      defenderArmy.splice(saxonDamaged,1)
    }
    return attackOutcome
  }
  


  vikingAttack(){
    let saxonDamaged = Math.round(Math.random()*(this.saxonArmy.length-1))
    let vikingAttacker = Math.round(Math.random()*(this.vikingArmy.length-1))

    let attackOutcome = this.saxonArmy[saxonDamaged].receiveDamage(this.vikingArmy[vikingAttacker].attack())
    if (this.saxonArmy[saxonDamaged].health <= 0){
      this.saxonArmy.splice(saxonDamaged,1)
    }
    return attackOutcome
  
  }
  saxonAttack(){
    let vikingDamaged = Math.round(Math.random()*(this.vikingArmy.length-1))
    let saxonAttacker = Math.round(Math.random()*(this.saxonArmy.length-1))

    let attackOutcome = this.vikingArmy[vikingDamaged].receiveDamage(this.saxonArmy[saxonAttacker].attack())
    if (this.vikingArmy[vikingDamaged].health <= 0){
      this.vikingArmy.splice(vikingDamaged,1)
    }
    return attackOutcome
  }

  showStatus(){
    
    if(this.saxonArmy.length ===0){
      return "Vikings have won the war of the century!"
    }
    if (this.vikingArmy.length ===0){
      return "Saxons have fought for their lives and survived another day..."
    }
    return "Vikings and Saxons are still in the thick of battle."
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
