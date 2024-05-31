import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = "iron man";
  public age: number = 45;
  public isChange: boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeName(): void{
    this.name = 'Spiderman'
    this.isChange = true;
  }

  changeAge(): void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'Iron man';
    this.age = 45;
    this.isChange = false;
  }


}
