const helpers = require('../villageRules/helpers.js');


describe('A helper function grabs index and valueof valid role', ()=> {
  test('Gets Role in object', ()=> {
    expect(helpers.index('independant', 'Auracabra')).toBe(1);
    expect(helpers.role('independant', 'Auracabra').infoValue).toBe('0');
    expect(helpers.role('specialVillager', 'Seer').infoValue).toBe('2');
  })
})