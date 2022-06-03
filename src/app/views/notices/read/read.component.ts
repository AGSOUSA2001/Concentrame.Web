import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, switchMap, take } from 'rxjs';
import { NoticeModel, NoticeReadModel } from 'src/app/models/notices';
import { NoticeService } from 'src/app/services/notice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  notice: NoticeReadModel = {
    id: 0,
    title: '',
    category: '',
    url: '',
    date: '',
    paragraph1: '',
    paragraph2: '',
    paragraph3: ''
  }
  constructor(private activatedRoute: ActivatedRoute, private noticeService: NoticeService, private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      take(1),
      switchMap((params) => {
        const idParam = params.get('id');
        if (idParam) {
          return this.noticeService.getNoticeById(Number(idParam));
        }

        return EMPTY;
      })
    ).subscribe((notice) => {
      if (notice) {
        this.notice = notice;
      }
    })
  }

  openNotice(url: string): void{
    window.open(url, '_blanck');
  }

  back():void{
    this.location.back();
  }
}
