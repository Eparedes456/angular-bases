import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `

        <h3>Counter {{counter}}</h3>

        <button (click)="plusAndRest(1,1)">+1</button>
        <button (click)="plusAndRest(1,2)">-1</button>

        <button (click)="reset()">RESET</button>
    `
})
export class CounterComponent{

    public counter: number = 10;

  plusAndRest(value : number, position : number):void {
    if(position == 1){
      this.counter += value;
    }else{
      if(this.counter > 0){
        this.counter -= value
      }
    }
    
  }

  reset(){
    this.counter = 10;
  }

}