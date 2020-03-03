import { Component } from '@angular/core';

/**
 * Generated class for the ClientComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'client',
  templateUrl: 'client.html'
})
export class ClientComponent {

  text: string;

  constructor() {
    console.log('Hello ClientComponent Component');
    this.text = 'Hello World';
  }

}
