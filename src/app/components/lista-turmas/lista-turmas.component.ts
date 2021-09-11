import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Disciplina } from 'src/app/models/disciplina';
import { Turma } from 'src/app/models/turma';

@Component({
  selector: 'app-lista-turmas',
  templateUrl: './lista-turmas.component.html',
  styleUrls: ['./lista-turmas.component.css'],
})
export class ListaTurmasComponent implements OnInit {

  @Output()
  public turmaSelecionada: EventEmitter<Turma> = new EventEmitter();

  public turmas: Turma[] = [
    new Turma(
      new Disciplina(
        'WEB01',
        'Fundamentos do Desenvolvimento Web',
      ),
      2020,
      1,
      [
      ],
    ),
    new Turma(
      new Disciplina(
        'WEB01',
        'Introducao Frameworks Web',
      ),
      2021,
      2,
      [
      ],
    ),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  public selecionarTurma(turma: Turma): void {
    this.turmaSelecionada.emit(turma);
  }

}
