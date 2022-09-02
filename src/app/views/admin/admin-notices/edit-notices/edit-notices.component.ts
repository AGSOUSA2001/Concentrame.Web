import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, switchMap, take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NoticeService } from 'src/app/services/notice.service';
import { NoticeUpdate } from 'src/app/models/notices';

@Component({
  selector: 'app-edit-notices',
  templateUrl: './edit-notices.component.html',
  styleUrls: ['./edit-notices.component.scss']
})
export class EditNoticesComponent implements OnInit {

  idNotice = 0;
  form: FormGroup;
  isLoading = true;

  constructor(private fb: FormBuilder, private noticeService: NoticeService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    this.form = this.fb.group({
      title: [null],
      category: [null],
      url: [null],
      date: [null, Validators.pattern(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)],
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
          return this.noticeService.getNoticeById(idParam);
        }

        return EMPTY;
      })
    ).subscribe((notice) => {
      if (notice) {
        this.form.patchValue(notice);
        this.isLoading=false;
        this.idNotice = notice.id;
      }
    })
  }

  updateNotice(): void{
    const noticeReq = this.form.getRawValue();
    const notice: NoticeUpdate = {
      id: this.idNotice,
      title: noticeReq.title,
      category: noticeReq.category,
      url: noticeReq.url,
      date: noticeReq.date,
      paragraph1: noticeReq.paragraph1,
      paragraph2: noticeReq.paragraph2,
      paragraph3: noticeReq.paragraph3
    }
    this.noticeService.updateNotice(this.idNotice,notice).subscribe(() => {
      void this.router.navigateByUrl("/admin/notices");
      this.toastr.success('La noticia ha sido editada correctamente');
    })
  }

}
