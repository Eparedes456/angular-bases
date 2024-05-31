import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public listHeroNames: string[] = [
    'Spiderman',
    'Iron man',
    'Batman',
    'Hulk'
  ];

  public nameHeroeDelete?: string;

  deleteLastHeroe():void{
    this.nameHeroeDelete = this.listHeroNames.pop();
  }



}
