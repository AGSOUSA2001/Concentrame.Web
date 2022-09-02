import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { NoticeModel } from 'src/app/models/notices';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-tecnology',
  templateUrl: './tecnology.component.html',
  styleUrls: ['./tecnology.component.scss']
})
export class TecnologyComponent implements OnInit {

  notices: NoticeModel[] = [];
  lastNotices: NoticeModel[] = [];
  countAll = 0;
  countFood = 0;
  countTecnology = 0;
  countSports = 0;
  countHealth = 0;
  countAnother = 0;

  isLoading = true;

  constructor(private router: Router, private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getAllNotices().pipe(
      switchMap((result: NoticeModel[]) =>{
        this.isLoading=true;
        this.countAll = result.length;
        return this.noticeService.getNoticesByCategory("food");
      }),
      switchMap((result: NoticeModel[]) =>{
        this.countFood = result.length;
        return this.noticeService.getLastNoticesByCategory("tecnology");
      }), 
      switchMap((result: NoticeModel[]) =>{
        this.lastNotices = result;
        return this.noticeService.getNoticesByCategory("tecnology");
      }),
      switchMap((result: NoticeModel[]) =>{
        this.notices = result;
        this.countTecnology = result.length;
        return this.noticeService.getNoticesByCategory("sports");
      }),
      switchMap((result: NoticeModel[]) =>{
        this.countSports = result.length;
        return this.noticeService.getNoticesByCategory("health");
      }),
      switchMap((result: NoticeModel[]) =>{
        this.countHealth = result.length;
        return this.noticeService.getNoticesByCategory("another");
      })
    ).subscribe((result: NoticeModel[]) =>{
      this.isLoading=false;
      this.countAnother = result.length;
    });
  }

  // openNotice(notice: string): void {
  //   window.open(notice, '_blanck');
  // }

  openNotice(id: number):void {
    this.router.navigate(['/notices/notice/'+id]);
  }

  openCategory(category: string): void {
    if (category == "all"){
      this.router.navigate(['notices']);
    }else{
      this.router.navigate(['/notices/'+category]);
    }
  }
}
