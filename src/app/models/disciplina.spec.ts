import { Disciplina } from './disciplina';

let disciplina: Disciplina;

beforeEach(() => {
  disciplina = new Disciplina(
    'WEB03',
    'Angular',
  );
})

describe('Disciplina', () => {
  it('should create an instance', () => {
    expect(disciplina).toBeTruthy();
  });
});
