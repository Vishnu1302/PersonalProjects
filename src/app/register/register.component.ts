import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,OnDestroy {
  form: FormGroup;
  loading:boolean=false;
  duplicate:boolean=false;
  trigger:boolean = false;
  createsubscribe:Subscription;
  constructor(private firebase:FirebaseService,private router:Router,private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email],this.duplicate],
      password:['',Validators.required]
    })
  }
  register() {
    this.duplicate = false;
    this.loading=true;
    let user = {
      email:this.form.controls['email'].value,
      password:this.form.controls['password'].value
    }
    this.createsubscribe = this.firebase.getUsers(user).subscribe(res => {
      if(res && res.length == 0) {
        this.firebase.createUser(user.email,user.password);
        this.loading=false;
        this.router.navigate(['/login']);
      }
      else if(res.length > 0) {
        this.duplicate = true;
        this.loading= false;
      }     
  })
    
  }
  ngOnDestroy(){
    this.createsubscribe.unsubscribe();
  }
}
