// getRole returns a role object based on a name and cateogry
const roleList = require('../currentRuleSets/roles.js');

const getRole = (role, category) => {
  return roleList[category][role];
};

module.exports = getRole;
