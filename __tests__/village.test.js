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
  test('Thirteen person Village Validation', () => {
    const village = new Village(13, false, ['Seer']);
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