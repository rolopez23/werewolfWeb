// import roleList from '../currentRuleSets/roles.js';
const roleList = require('../currentRuleSets/roles.js');

class Village {
  constructor(players, allowIndependants = false) {
    this.werewolves = Math.floor(players / 4);
    this.specialVillagers = Math.floor((players + 1) / 4);
    this.eyes = this.specialVillagers - 1;
    this.direwolf = players % 2 === 0 ? 1 : 0;
    this.specialWerewolves = Math.floor(this.werewolves / 2) - this.direwolf;
    this.werewolfSupport = players % 4 === 3 ? 1 : 0;
    this.thirdParty = players % 4 === 2 ? 1 : 0;
    this.villagers =
      players -
      this.specialVillagers -
      this.werewolves -
      this.werewolfSupport -
      this.thirdParty;
    // includes only optional roles.
    this.roleList = [];
    this.specialVillagerList = [];
    this.specialWerewolfList = [];
    this.allowIndependant = allowIndependants;
  }
  generetaVillage() {
    let wildcard = null;
    let specials = [];
    let specialWerewolves = [];
    let floatBucket = null;
    if (this.thirdParty) {
      floatBucket = 'teamSwitcher';
    } else if (this.werewolfSupport) {
      floatBucket = 'werewolfSupport';
    }
    // Add third team cases
    if (floatBucket !== null) {
      const options = roleList[floatBucket];
      let index = Math.floor(Math.random(options.length));
      let wildcard = options[index];
    }

    return 1;
  }
  // generateAllValidVillages() {
  //   let testedVillages = [];
  //   let villages = [];
  //   // evalulate third team cases
  //   let floatBucket = null;
  //   if (this.thirdParty) {
  //     floatBucket = 'teamSwitcher';
  //   } else if (this.werewolfSupport) {
  //     floatBucket = 'werewolfSupport';
  //   }
  //   // Add third team cases
  //   if (floatBucket !== null) {
  //     const options = roleList[floatBucket];
  //     for (let i = 0; i < options.length; i++) {
  //       const village = [];
  //       const role = Object.keys(options[i])[0];
  //       village.push(role);
  //       villages.push(village);
  //     }
  //   }
  //   // Add Werewolf Specials
  //   let newVillages = [];
  //   let specialWerewolves = roleList.specialWerewolf;
  //   // console.log(specialWerewolves.length, villages.length);
  //   for (let i = 0; i < this.specialWerewolves; i++) {
  //     for (let j = 0; j < villages.length; j++) {
  //       let village = villages[j];
  //       for (let k = 0; k < specialWerewolves.length; k++) {
  //         let werewolf = Object.keys(roleList.specialWerewolf[k])[0];
  //         if (village.indexOf(werewolf) === -1) {
  //           newVillages.push(village.concat(werewolf));
  //         }
  //       }
  //     }
  //     villages = newVillages;
  //     newVillages = [];
  //   }
  //   let specialVillagers = roleList.specialVillager;
  //   for (let i = 0; i < this.specialVillagers; i++) {
  //     for (let j = 0; j < villages.length; j++) {
  //       let village = villages[j];
  //       for (let k = 0; k < specialVillagers.length; k++) {
  //         let special = Object.keys(specialVillagers[k])[0];
  //         if (village.indexOf(special) === -1) {
  //           newVillages.push(village.concat(special));
  //         }
  //       }
  //     }
  //     villages = newVillages;
  //     newVillages = [];
  //   }

  //   return villages;
  // }
}

let test = new Village(19);
// console.log(test);
// // console.log(roleList.werewolfSupport);
console.log(test.generateAllValidVillages().length);
// console.log(test.specialWerewolves);
// console.log(test.specialWerewolves);

// export default Village;
