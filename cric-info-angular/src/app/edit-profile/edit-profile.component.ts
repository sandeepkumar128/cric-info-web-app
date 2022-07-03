import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { User } from '../model/User';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  
  profileLogin: FormGroup;
  name: FormControl;
  password: FormControl;
  email: FormControl;
  user:User = new User();
  userFile: string;
  imagePath: any;
  imgURL: string | ArrayBuffer;
  k: string;
  username: string;
  
  constructor(private userService : UserDataService , private routerService:RouterService) { }

  ngOnInit() {
  
    this.username = sessionStorage.getItem("key");
    
    this.name = new FormControl('', [Validators.required, Validators.minLength(5)]),
    this.password = new FormControl('', [Validators.required , Validators.minLength(4)]),
    this.email = new FormControl('' , [Validators.required]);

    this.profileLogin = new FormGroup({
      email: this.email,
      name: this.name,
      password: this.password
    });

    
    this.k= localStorage.getItem("pic");
    console.log(this.k);
  }

  
  loginSubmit(){
    console.log("hello");
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
  editUser() {

    this.user.email = this.profileLogin.value.email;
    this.user.name = this.profileLogin.value.name;
    this.user.password = this.profileLogin.value.password;
    this.user.profilePic = this.userFile;
    console.log(this.user);

    this.userService.updateUser(this.user , this.user.email).subscribe(data=>{
      console.log("value put into the DB");
    },
    
    error=>{
      console.log("no it couldn't be putinto the database");
    });

  }
  backToDashBoard(){
       this.routerService.toDashboard();
  }

}