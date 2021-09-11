import { Aluno } from './aluno';
import { Disciplina } from './disciplina';
import { Turma } from './turma';

let turma: Turma;

beforeEach(() => {
  turma = new Turma(
    new Disciplina(
      'Angular',
    ),
    2021,
    1,
    [
    ],
  );
})
describe('Turma', () => {
  it('should create an instance', () => {
    expect(turma).toBeTruthy();
  });
});
