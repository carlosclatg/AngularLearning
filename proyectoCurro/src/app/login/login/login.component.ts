import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginFormValidatorService } from '../login-form-validator.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  form: FormGroup;
  errorMessage: string = null;        

    constructor(fb: FormBuilder, private loginService: LoginService){        
        this.form = fb.group({
            username:['',Validators.required ],
            password:['',Validators.compose([Validators.required, 
              LoginFormValidatorService.isPasswordCorrect])]            
        })
    }


    login(){
        try {
          this.loginService.authenticate(this.form.controls['username'].value, this.form.controls['password'].value);
        } catch (error) {
            this.errorMessage =  error.name;
            console.log(this.errorMessage)
        }        

    }

}
