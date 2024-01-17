import { Component } from "@angular/core";
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';

@Component({
    standalone: false,
    selector:"app-contador",
    //imports: [ButtonAddComponent,ButtonDisComponent],
    templateUrl: "./counter.component.html"
})

export class CounterComponent{
    contador: number = 0;

    handleCountAdd(value: number){
        this.contador = value;
    }
    
    handleCountDis(value: number){
        this.contador = value;
    }
  
}