import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Owner from 'src/models/owner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  owner: Owner = {
    id: 0,
    name : " " ,
    phoneNumber: "",
    city : " "
  } 

  constructor(private ownerService: AuthService,private  router:ActivatedRoute ) {}

  addOwner(owner:Owner){
    this.ownerService.signUp(owner).subscribe(respone => {
      if(respone)
      console.log(respone)   
    })
  }
}
