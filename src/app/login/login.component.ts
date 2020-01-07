import { Component, OnInit, ɵConsole } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router'
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title:string='HomeKrafts';
  form: FormGroup;
  invalid:boolean=false;
  invalidpwd:boolean = false;
  loading:boolean =false;
  constructor(private firebase: FirebaseService,private router:Router,private fb: FormBuilder) {
    if(localStorage.getItem('user')) {
      this.router.navigate(['/product'])
    }
   }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required]
    })
    console.log(this.form)
  }
  async login() {
    this.loading = true;
    this.invalid= false;
    this.invalidpwd=false;
    let u = {
      email:this.form.controls['email'].value,
      password:this.form.controls['password'].value
    }
  await this.firebase.getUsers(u).subscribe(res => {
       if(res && res.length > 0) {
        localStorage.setItem('user',u.email)
         let temparr:any = res[0];
         if(temparr.email === u.email && temparr.password === u.password){
          this.loading=false;
         this.router.navigate(['/product'])
         }
         else{
           this.loading = false;
           this.invalidpwd = true;
         }
       }
       else {
         this.loading = false;
         this.invalid = true;
       }
   })
  }

}
