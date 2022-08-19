import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { UserLogin } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService, private toastr: ToastrService) { 
    this.form = this.fb.group({
      email: [null, Validators.email],
      password: [null, [ Validators.minLength(8), Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/)]]
    });
  }

  ngOnInit(): void {
    
  }

  loginUser(): void{
    const userReq = this.form.getRawValue();
    const user: UserLogin = {
      email: userReq.email,
      password: userReq.password
    }
    this.loginService.loginUser(user).subscribe(async result => {
      if(result){
        localStorage.setItem('isLogged', 'true');
        await delay(1000);
        this.toastr.success('El usuario ha sido logeado correctamente');
        void this.router.navigateByUrl("/admin/home");
      }else{
        this.toastr.error('No se ha encontrado un usuario con esa contraseña');
      }
    })
  }
}
