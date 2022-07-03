import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  profileLogin: FormGroup;
  password: FormControl;
  submitMessage: string;
  mypic: string;
  email: FormControl;
  userName: string;
  username: any;

  constructor(private auth: AuthenticationService , private routingservice: RouterService , private userService:UserDataService) { }

  ngOnInit() {

    this.email = new FormControl('', [Validators.required  , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") ]),
    this.password = new FormControl('', [Validators.required, Validators.minLength(4)]),
    
    this.profileLogin = new FormGroup({
      email: this.email,
      password: this.password
    });
    console.log(this.email + "  " + this.password);
  }

  checkUser(){
    console.log("inside check method");
    console.log("username is: " + this.email.value + "  password is:  " + this.password.value);
  }

  loginSubmit() {
   

    console.log("inside login submit"); 
    this.userService.getUserByMailAndPassword(this.email.value , this.password.value).subscribe(data=>{
   
      
    this.userName = data.name;

      this.mypic=data.profilePic;
      localStorage.setItem("pic",this.mypic);
       console.log(this.mypic);
      if(this.password.value == data.password){
        
        this.routingservice.toDashboard();
      }

      else{
        console.log("better luck next time");
      }

      sessionStorage.setItem("key", this.email.value);

    },
  
    error=>{
      console.log("okay couldn't login better luck next time");
    }
    );  
  }

  gotoregister(){
    this.routingservice.toRegister();
  }

  //login method with authentication
  checkLogin() {
    (this.auth.authenticate(this.email.value, this.password.value).subscribe(
      data => {
       this.userService.getUserByMail(this.email.value).subscribe(
         data=>
         {
           console.log("inside getuserBYMail*********");
           console.log(data);
          this.mypic=data.profilePic;
          localStorage.setItem("pic",this.mypic);
          console.log("pic**************");
           console.log(this.mypic);
         },
         error=>{
          console.log(error);
         }
       );
        this.routingservice.toDashboard();
      },
      error => {
        console.log(error)
      }
    )
    );
  }



}
