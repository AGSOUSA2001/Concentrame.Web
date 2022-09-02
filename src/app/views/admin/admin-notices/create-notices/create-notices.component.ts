import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NoticeCreate } from 'src/app/models/notices';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-create-notices',
  templateUrl: './create-notices.component.html',
  styleUrls: ['./create-notices.component.scss']
})
export class CreateNoticesComponent implements OnInit {
  
  form: FormGroup;
  constructor(private fb: FormBuilder, private noticeService: NoticeService, private router: Router, private toastr: ToastrService) {
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
  }

  createNotice():void{
    const noticeReq = this.form.getRawValue();
    const notice: NoticeCreate = {
      title: noticeReq.title,
      category: noticeReq.category,
      url: noticeReq.url,
      date: noticeReq.date,
      paragraph1: noticeReq.paragraph1,
      paragraph2: noticeReq.paragraph2,
      paragraph3: noticeReq.paragraph3
    }
    this.noticeService.createNotice(notice).subscribe(() => {
      void this.router.navigateByUrl("/admin/notices");
      this.toastr.success('La noticia ha sido creada correctamente');
    })
  }

}
