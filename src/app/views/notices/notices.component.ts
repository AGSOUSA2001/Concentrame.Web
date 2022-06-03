import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { NoticeModel } from 'src/app/models/notices';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

  notices: NoticeModel[] = [];
  lastNotices: NoticeModel[] = [];
  countAll = 0;
  countFood = 0;
  countTecnology = 0;

  isLoading = true;
  
  constructor(private router: Router, private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getAllNotices().pipe(
      switchMap((result: NoticeModel[]) =>{
        this.isLoading=true;
        this.notices = result;
        this.countAll = result.length;
        return this.noticeService.getLastNotices();
      }),
      switchMap((result: NoticeModel[]) =>{
        this.lastNotices = result;
        return this.noticeService.getNoticesByCategory("food");
      }),
      switchMap((result: NoticeModel[]) =>{
        this.countFood = result.length;
        return this.noticeService.getNoticesByCategory("tecnology");
      })
    ).subscribe((result: NoticeModel[]) =>{
      this.isLoading=false;
      this.countTecnology = result.length;
    });
  }

  // openNotice(notice: string): void {
  //   window.open(notice, '_blanck');
  // }

  openNotice(id: number):void {
    this.router.navigate(['/notices/notice/'+id]);
  }

  openCategory(category: string): void {
    this.router.navigate(['/notices/'+category]);
  }

}
