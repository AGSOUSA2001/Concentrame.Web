import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LinkCreate } from 'src/app/models/links';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-create-links',
  templateUrl: './create-links.component.html',
  styleUrls: ['./create-links.component.scss']
})
export class CreateLinksComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private linkService: LinkService, private router: Router, private toastr: ToastrService) {
    this.form = this.fb.group({
      title: [null],
      url: [null]
    });
   }

  ngOnInit(): void {
  }

  createLink():void{
    const linkReq = this.form.getRawValue();
    const link: LinkCreate = {
      title: linkReq.title,
      url: linkReq.url
    }
    this.linkService.createLinks(link).subscribe(() => {
      void this.router.navigateByUrl("/admin/links");
      this.toastr.success('El link ha sido creado correctamente');
    })
  }
}
