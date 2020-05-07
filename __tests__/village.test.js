const Village = require('../villageRules/village.js');

describe('A village conforms to construction guidelines', () => {
  test('Thirteen person Village Validation', () => {
    const village = new Village(13);
    expect(village.eyes).toBe(2);
    expect(village.werewolfSupport).toBe(0);
    expect(village.thirdParty).toBe(0);
    expect(village.villagers).toBe(7);
    expect(village.direwolf).toBe(0);
    expect(village.specialWerewolves).toBe(2);
  });

  test('Fourteen person Village Validation', () => {
    const village = new Village(14);
    expect(village.eyes).toBe(2);
    expect(village.werewolfSupport).toBe(0);
    expect(village.thirdParty).toBe(1);
    expect(village.villagers).toBe(7);
    expect(village.direwolf).toBe(1);
    expect(village.specialWerewolves).toBe(1);
  });

  test('Fifteen person Village Validation', () => {
    const village = new Village(15);
    expect(village.eyes).toBe(3);
    expect(village.werewolfSupport).toBe(1);
    expect(village.thirdParty).toBe(0);
    expect(village.villagers).toBe(7);
    expect(village.direwolf).toBe(0);
    expect(village.specialWerewolves).toBe(2);
  });
});

describe('A village can be created with a required Seer', () => {
  const village = new Village(13, false, [['specialVillager', 'Seer']]);
  test('Village is valid', () => {
  
    expect(village.eyes).toBe(2);
    expect(village.werewolfSupport).toBe(0);
    expect(village.thirdParty).toBe(0);
    expect(village.villagers).toBe(7);
    expect(village.direwolf).toBe(0);
    expect(village.specialWerewolves).toBe(2);
    expect(village.roleList.length).toBe(5)
  });

  test('Village contains a Seer', ()=>{
    expect(village.roleList.filter(role=>role.roleName==='Seer').length).toBe(1);
  })
})  

describe('A village can be created with a Wolfman', () => {
  const village = new Village(17, false, [['specialWerewolf', 'Wolf Man']]);

  test('Village is valid', () => {

    expect(village.eyes).toBe(3);
    expect(village.werewolfSupport).toBe(0);
    expect(village.thirdParty).toBe(0);
    expect(village.villagers).toBe(9);
    expect(village.direwolf).toBe(0);
    expect(village.specialWerewolves).toBe(2);
    expect(village.roleList.length).toBe(6)
  });

  test('Village contains a Seer', () => {
    expect(village.roleList.filter(role => role.roleName === 'Wolf Man').length).toBe(1);
  })
});
  

describe('A village can be created with a Sorceress', () => {
  const village = new Village(11, false, [['werewolfSupport', 'Sorceress']]);
 
  test('Village is valid', () => {

    expect(village.eyes).toBe(2);
    expect(village.werewolfSupport).toBe(1);
    expect(village.thirdParty).toBe(0);
    expect(village.villagers).toBe(5);
    expect(village.direwolf).toBe(0);
    expect(village.specialWerewolves).toBe(1);
    expect(village.roleList.length).toBe(5)
  });

  test('Village contains a Sorceress', () => {
    expect(village.roleList.filter(role => role.roleName === 'Sorceress').length).toBe(1);
  })
});

describe('A village can be created with a Tanner', () => {
  const village = new Village(18, true, [['independant', 'Tanner']]);
 
  test('Village is valid', () => {

    expect(village.eyes).toBe(3);
    expect(village.werewolfSupport).toBe(0);
    expect(village.thirdParty).toBe(1);
    expect(village.villagers).toBe(9);
    expect(village.direwolf).toBe(1);
    expect(village.specialWerewolves).toBe(1);
    expect(village.roleList.length).toBe(6)
  });

  test('Village contains a Tanner', () => {
    expect(village.roleList.filter(role => role.roleName === 'Tanner').length).toBe(1);
  })
});