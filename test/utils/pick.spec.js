import expect from 'expect';
import pick from 'lodash/object/pick';

describe('Utils', () => {
  describe('pick', () => {
    it('should return object with picked values', () => {
      const test = { 'name': 'lily', 'age': 20 };
      expect(pick(test, x => typeof x === 'string')).toEqual({ 'name': 'lily' });
    });
  });
});
