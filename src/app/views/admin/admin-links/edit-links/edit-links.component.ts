import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, switchMap, take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LinkService } from 'src/app/services/link.service';
import { LinkUpdate } from 'src/app/models/links';

@Component({
  selector: 'app-edit-links',
  templateUrl: './edit-links.component.html',
  styleUrls: ['./edit-links.component.scss']
})
export class EditLinksComponent implements OnInit {

  idLink = 0;
  form: FormGroup;
  isLoading = true;

  constructor(private fb: FormBuilder, private linkService: LinkService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    this.form = this.fb.group({
      title: [null],
      category: [null],
      url: [null],
      date: [null],
      paragraph1: [null],
      paragraph2: [null],
      paragraph3: [null],
    });
   }


  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      take(1),
      switchMap((params) => {
        this.isLoading=true;
        const idParam = parseInt(params.get('id')||'');
        if (idParam) {
          return this.linkService.getLinkById(idParam);
        }

        return EMPTY;
      })
    ).subscribe((link) => {
      if (link) {
        this.form.patchValue(link);
        this.isLoading=false;
        this.idLink = link.id;
      }
    })
  }

  updateLink(): void{
    const linkReq = this.form.getRawValue();
    const link: LinkUpdate = {
      id: this.idLink,
      title: linkReq.title,
      url: linkReq.url
    }
    this.linkService.updateLink(this.idLink,link).subscribe(() => {
      void this.router.navigateByUrl("/admin/links");
      this.toastr.success('El link ha sido editado correctamente');
    })
  }

}
