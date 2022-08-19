import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
