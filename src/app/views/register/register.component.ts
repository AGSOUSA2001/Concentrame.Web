import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactModel } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  url = 'https://formspree.io/f/xvollnbk';

  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService) {
    this.form = this.fb.group({
      email: [null, Validators.email],
      name: [null],
      phone: [null, Validators.pattern("[0-9]{9}")],
      message: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const data = this.form.getRawValue();
    const contact: ContactModel = {
      email: data.email,
      name: data.name,
      phone: data.phone,
      message: data.message
    }
    this.contactService.sendEmail(contact).subscribe(res =>{
      this.toastr.success('Los datos se han enviado correcatemente');
      this.form.reset();
    });
  }
  
}
