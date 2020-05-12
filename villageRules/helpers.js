// getRole returns a role object based on a name and category
const roleList = require('../currentRuleSets/roles.js');

const getIndex = (category, roleName) => {
  const list = roleList[category];
  // console.log(list);
  return list.findIndex((role)=>role.roleName===roleName)
}


const getRole = (category, roleName) => {
  const index = getIndex(category, roleName);
  return roleList[category][index];
};

// console.log(getIndex('independant', 'Auracabra'))


module.exports.role = getRole;
module.exports.index = getIndex;
