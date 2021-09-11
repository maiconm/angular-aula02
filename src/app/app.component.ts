import { Component } from '@angular/core';
import { Turma } from './models/turma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public exibeTurma(turmaSelecionada: Turma) {
    console.log({turmaSelecionada});
  }

}
