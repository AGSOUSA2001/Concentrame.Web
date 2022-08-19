import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { startWith, Subject, switchMap } from 'rxjs';
import { NoticeModel } from 'src/app/models/notices';
import { NoticeService } from 'src/app/services/notice.service';
import { DeleteNoticesComponent } from './delete-notices/delete-notices.component';

@Component({
  selector: 'app-list-notices',
  templateUrl: './list-notices.component.html',
  styleUrls: ['./list-notices.component.scss']
})
export class ListNoticesComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<NoticeModel>;
  displayedColumns: string[] = ['id', 'title', 'category', 'actions'];
  
  notices: NoticeModel[] = []

  refreshData$ = new Subject<void>();
  isLoading = true;

  constructor(private noticeService: NoticeService, private dialog: MatDialog, private router: Router, private toastr: ToastrService) { 
    this.dataSource = new MatTableDataSource(this.notices);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refreshData$.pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading=true;
        return this.noticeService.getAllNotices();
      }),
    ).subscribe((res: NoticeModel[]) => {
      this.notices = res;
      this.dataSource.data = this.notices;
      this.isLoading=false;
    });
  }
  deleteNotice(id: number, title: string):void{
    const dialogRef = this.dialog.open(DeleteNoticesComponent, {
      data: {
        title: title,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.noticeService.deleteNotice(id).subscribe(() => {
          this.refreshData$.next();
          this.toastr.success('La noticia ha sido eliminada correctamente');
        });
      }
    });
  }
  back():void {
    void this.router.navigate(['/admin/home']);
  }
}
