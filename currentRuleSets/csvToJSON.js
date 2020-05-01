//converst the CSV to a JSON
const fs = require('fs');


const parseData = (file) => {
  return new Promise((resolve, reject)=> {
    fs.readFile(file, 'utf8', (err, data)=> {
      if (err) reject(err);
      resolve(data);
    });
  });
};

parseData('roles.csv')
  .then((data) => {
    let roles = {};
    roles.independant = [];
    roles.teamSwitcher = [];
    roles.specialVillager = [];
    roles.specialWerewolf = [];
    roles.werewolfSupport = [];
    const roleArray = data.split('\n');
    // console.log(roles);
    const rowLabels = roleArray[0].split(',');
    for (let i = 1; i < roleArray.length; i++) {
      const role = roleArray[i].split(',');
      let roleInfoObject = {};
      for (let j = 0; j < rowLabels.length; j++) {
        if (j === rowLabels.length - 1) {
          roleInfoObject[rowLabels[j]] = role.splice(j).join('');
        } else {
          roleInfoObject[rowLabels[j]] = role[j];
        }
      }
      const team = roleInfoObject.roleType;
      // console.log(team);
      roles[team].push(roleInfoObject);
    }
    return roles;
  })
  .then(roles => {
    fs.writeFile('roles.json', JSON.stringify(roles),()=>{console.log('done')});
  });
