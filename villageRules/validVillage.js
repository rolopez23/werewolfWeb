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
  const eyesTest = villageEyes === eyes;
  const seerTest = requiresSeer > 0 === seer;
  const protectorTest = protectors <= 1;
  return eyesTest && seerTest && protectorTest;
};

export default isValidVillage;
