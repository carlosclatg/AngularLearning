import { Component, OnInit, Input } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent  {

  public message: string = 'hola';

  constructor (private errorService: ErrorService){}

  

}
