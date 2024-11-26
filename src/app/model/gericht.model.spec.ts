import { Gericht } from './gericht.model';

describe('Gericht', () => {
  it('should create an instance', () => {
    expect(new Gericht("1", 'name', {'description':20}, 10, {'description':20})).toBeTruthy();
  });
});
