import { Aluno } from './aluno';

let aluno: Aluno;

beforeEach(() => {
  aluno = new Aluno(
    111,
    'Joao das Couves',
  );
});

describe('Aluno', () => {
  it('should create an instance', () => {
    expect(aluno).toBeTruthy();
  });
});
