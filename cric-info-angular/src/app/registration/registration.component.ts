import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { UserDataService } from '../services/user-data.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  profileLogin: FormGroup;
  email = new FormControl();
  username = new FormControl();
  password = new FormControl();
  name = new FormControl();
  submitMessage: string;
  user:User = new User();
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  userFile: string;
  imagePath: any;
  imgURL: string | ArrayBuffer;
  mypic: any;

  constructor(private auth: AuthenticationService , private routingservice: RouterService , private userService:UserDataService , private httpClient : HttpClient) {}
  
  ngOnInit() {
    
    this.name = new FormControl('', [Validators.required, Validators.minLength(4)]),
    this.email = new FormControl('' , [Validators.required  , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    this.password = new FormControl('', [Validators.required , Validators.minLength(4)]),
    
    this.profileLogin = new FormGroup({
      password: this.password,
      email: this.email,
      name:this.name
    });

  }

  loginSubmit(){
    console.log("from register of login submit")
    console.log("email is " + this.email.value);    
  }

  addUser() {

    this.user.name = this.profileLogin.value.name;
    this.user.email = this.profileLogin.value.email;
    this.user.password = this.profileLogin.value.password;
    this.user.profilePic = this.userFile;

    this.userService.addUser(this.user).subscribe(data=>{
      
      //console.log("The data is : " + data);
      //you need to send the mail over here
      
      this.userService.sendMail(this.email.value).subscribe(data=>{console.log("data")});
      this.routingservice.toLogin();
      this.submitMessage = "Logged in successfully";

      //this.mypic=data.image;
      //localStorage.setItem("pic",this.mypic); 

    },
    
    error=>{
      console.log("no it couldn't be putinto the database");
    });

  }

  onFileChanged(event) {   
     const file= event.target.files[0];
     var reader= new FileReader();
     this.imagePath= file;
     console.log(this.imagePath);
     reader.readAsDataURL(file);     
     reader.onload= (_event)=>{
     this.imgURL= reader.result;
     this.userFile= reader.result.toString();
     }
  }

}