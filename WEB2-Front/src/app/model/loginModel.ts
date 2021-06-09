export class LoginModel {
    email: string;
    password: string;
    IdToken:string;
    
    constructor(email: string, password: string) { 
         
    this.email=email;
    this.password=password;
   
    }
}
