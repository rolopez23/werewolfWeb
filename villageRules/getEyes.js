// Helper array that adds eyes

const getEyes = roleList => {
  let eyes = 0;
  for (let i = 0; i < roleList.length; i++) {
    let role = roleList[i];
    eyes += role.infoValue;
  }
  return eyes;
};

export default getEyes;
