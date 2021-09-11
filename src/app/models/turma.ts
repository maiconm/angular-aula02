import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export class Turma {

  constructor(
    /**
     * Disciplina associada a turma.
     */
    public disciplina: Disciplina,
    public ano: number,
    public periodo: number,
    public alunos: Aluno[],
  ) {
  }

  public get nome(): string {
    return `${this.disciplina.codigo}-${this.ano}/`;
  }
}
