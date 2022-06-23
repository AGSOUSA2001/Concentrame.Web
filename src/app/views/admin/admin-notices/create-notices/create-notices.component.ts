import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      date: [null],
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
      this.toastr.success('El usuario ha sido creado correctamente');
    })
  }

}
