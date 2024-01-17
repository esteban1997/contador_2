import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-add',
  standalone: false,
  //imports: [],
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {
  @Input()
  contador: number = 0;

  @Output() onAdd:EventEmitter<number> = new EventEmitter();
  
  add(){
    this.contador++;
    this.onAdd.emit(this.contador);
  }
}
