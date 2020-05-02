// Input is an array of role objects and eyes,
// Output is a Boolean indicating if the village is valid
const isValidVillage = (roles, eyes) => {
  let villageEyes = 0;
  let protectors = 0;
  let seer = false;
  let requiresSeer = 0;
  for (let i = 0; i < roles.length; i++) {
    villageEyes += parseInt(roles[i].infoValue, 10);
    protectors += parseInt(roles[i].isProtector, 10);
    requiresSeer += parseInt(roles[i].requireSeer, 10);
    if (roles[i].roleName === 'Seer') {
      seer = true;
    }
  }
  const hasCorrectEyes = villageEyes === eyes;
  const hasCorrectSeer = requiresSeer > 0 === seer;
  const oneSeer = requiresSeer < 0 !== seer;
  const hasCorrectProtectors = protectors <= 1;
  // console.log(eyes, villageEyes, protectors, requiresSeer);
  // console.log(eyesTest, protectorTest, seerTest);
  return hasCorrectEyes && hasCorrectSeer && hasCorrectProtectors && oneSeer;
};

// export default isValidVillage;
module.exports = isValidVillage;
