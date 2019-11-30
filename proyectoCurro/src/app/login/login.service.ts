import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: "root"
})
export class LoginService {

  constructor(private authService: AuthenticationService) { }

  authenticate(username: string, password: string) {
    if(username.length == 0) throw new Error ('userName is empty');
    if(password.length == 0) throw new Error ('password is empty');

    if((username == "carlos") && (password == "123")){
    } else {
      throw new Error ('Incorrect credentials');
    }
  }
}
