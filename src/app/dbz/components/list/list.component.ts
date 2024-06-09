
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  
  
})
export class DbzListComponent { 

  @Input() //se declara este decorador para recibir datos del componente padre a un hijo
  public characterList : Character[] = []

  @Output()
  public onDeleteIndex: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    if(id === undefined || id === null ){
      return;
    }
    console.log("uuid", id);
    this.onDeleteIndex.emit(id);
  }

}
