import { Disciplina } from './disciplina';

let disciplina: Disciplina;

beforeEach(() => {
  disciplina = new Disciplina('Angular');
})

describe('Disciplina', () => {
  it('should create an instance', () => {
    expect(disciplina).toBeTruthy();
  });
});
