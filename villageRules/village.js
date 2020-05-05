// import roleList from '../currentRuleSets/roles.js';
const roleList = require('../currentRuleSets/roles.js');
const isValidVillage = require('./validVillage');
const helpers = require('./helpers.js');


// Creates a village taking in four variables, players is an int
// allowIndependants is a boolean, rolesIncluded is an array of roles
// which is another array with element 0 being the team and 1 being the name
// rolesExcluded is the same and not implemented yet.
class Village {
  constructor(players, allowIndependants = false, rolesIncluded = []) {
    // Game logic werewolves are players divided by 4
    this.werewolves = Math.floor(players / 4);
    // Game logic special villagers equal players divided by 4
    this.specialVillagers = Math.floor((players + 1) / 4);
    // Eyes is always villagers less 1
    this.eyes = this.specialVillagers - 1;
    // Direwolves on even player count
    this.direwolf = players % 2 === 0 ? 1 : 0;
    // One half the werewolves are special or direwolves
    this.specialWerewolves = Math.ceil(this.werewolves / 2) - this.direwolf;
    // Werewolf Support if players mod 4 is three.
    this.werewolfSupport = players % 4 === 3 ? 1 : 0;
    // Third Party if players mod 4 is 2.
    this.thirdParty = players % 4 === 2 ? 1 : 0;
    // Villagers is the remainder
    this.villagers =
      players -
      this.specialVillagers -
      this.werewolves -
      this.werewolfSupport -
      this.thirdParty;
    // includes only optional roles.
    this.roleList = [];
    this.requiredSpecials = [];
    this.requiredSpecialWerewolves = [];
    this.requitedWildcard = null; 
    this.allowIndependant = allowIndependants;
    // First add in new roles
    for (let i = 0; i < rolesIncluded.length; i++) {
      // get role
      console.log(rolesIncluded[i][0], rolesIncluded[i][1])
      let role = helpers.role(rolesIncluded[i][0], rolesIncluded[i][1]);
      // place in bucket
      switch (role.roleType) {
        case 'teamSwitcher':
          this.requiredWildcard = role;
          break;
        case 'independant':
          this.requiredWildcard = role;
          break;
        case 'specialVillager':
          this.requiredSpecials.push(role);
          break;
        case 'specialWerewolf':
          this,requiredSpecialWerewolves.push(role);
          break;
        case 'werewolfSupport':
          this.requiredWildcard = role;
          break;
      }
    }

    // Make roles invalid and generate village until
    this.valid = false;
    while (this.valid === false) {
      let village = this.generateVillage();
      this.roleList = village;
      this.valid = isValidVillage(village, this.eyes);
    }
  }

  randomVillage(eyes) {
    let valid = false;
    while (this.valid === false) {
      let village = this.generateVillage();
      valid = isValidVillage(village, eyes);
    }
  }

  // function to access data on the village.
  getData() {
    const data = {};
    data.roleList = this.roleList;
    data.direwolf = this.direwolf;
    data.thirdParty = this.thirdParty;
  
    data.specialWerewolves = this.specialWerewolves;
    data.werewolves = this.werewolves - this.direwolf - this.specialWerewolves;
    data.villagers = this.villagers;
    return data;
  }

  // Creates all roles for a village based on the current number
  // roles are objects
  generateVillage(
    requiredSpecials = [],
    requiredSpecialWerewolves = [],
    requiredWildcard = null,
  ) {
    // Initiate everything to passed in values
    let wildcard = requiredWildcard;
    let specials = requiredSpecials;
    let specialWerewolves = requiredSpecialWerewolves;
    let floatBucket = null;

    // Set wildcard to be teamSweitcher or werewolfSupport
    // based on village size
    if (this.thirdParty) {
      floatBucket = 'teamSwitcher';
    } else if (this.werewolfSupport) {
      floatBucket = 'werewolfSupport';
    }
    // Add third team cases
    if (floatBucket !== null) {
      const options = roleList[floatBucket];
      let index = Math.floor(Math.random() * options.length);
      wildcard = options[index];
    }
    //pull role list
    //Whenever you pull a role track its index to prevent duplicates
    const wolves = roleList.specialWerewolf;
    let indices = [];
    //Add in all the specialWerewolves
    for (let i = 0; i < requiredSpecialWerewolves.length; i++) {
      const wolf = specialWerewolves[i];
      indices.push(getIndex('specialWerewolf',wolf.roleName))
    }


    //generate randomNumbers
    for (let i = 0; i < this.specialWerewolves; i++) {
      let indexExists = true;
      while (indexExists) {
        let index = Math.floor(Math.random() * wolves.length);
        if (indices.indexOf(index) === -1) {
          indices.push(index);
          indexExists = false;
        }
      }
    }

    for (let i = 0; i < indices.length; i++) {
      specialWerewolves.push(wolves[indices[i]]);
    }

    const specialRoles = roleList.specialVillager;
    indices = [];
    for (let i = 0; i < this.specialVillagers; i++) {
      let indexExists = true;
      while (indexExists) {
        let index = Math.floor(Math.random() * specialRoles.length);
        if (indices.indexOf(index) === -1) {
          indices.push(index);
          indexExists = false;
        }
      }
    }
    for (let i = 0; i < indices.length; i++) {
      specials.push(specialRoles[indices[i]]);
    }

    return wildcard
      ? [wildcard].concat(specials).concat(specialWerewolves)
      : [].concat(specials).concat(specialWerewolves);
  }
}

// let test = new Village(10);
// // console.log(test);
// console.log(test.roleList, typeof test)
// // console.log(roleList.werewolfSupport);
// let village = test.generateVillage();
// console.log(isValidVillage(village, test.eyes));
// console.log(test.specialWerewolves);
// console.log(test.specialWerewolves);

// export default Village;
module.exports = Village;
