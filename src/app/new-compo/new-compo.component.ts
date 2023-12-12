import { Component } from '@angular/core';

@Component({
  selector: 'app-new-compo',
  templateUrl: './new-compo.component.html',
  styleUrl: './new-compo.component.css',
})
export class NewCompoComponent {
  myName: string = 'Shivam';
  myAge: number = 25;
}
