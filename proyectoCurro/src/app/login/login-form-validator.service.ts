import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginFormValidatorService {

  public static isUserCorrect(form: FormControl){
    return {isUserCorrect : true}
  }

  public static isPasswordCorrect(form: FormControl){
    return {isPasswordCorrect : true}
  }
}
