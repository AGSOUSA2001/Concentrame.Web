import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { startWith, Subject, switchMap } from 'rxjs';
import { LinkModel } from 'src/app/models/links';
import { LinkService } from 'src/app/services/link.service';
import { DeleteLinksComponent } from './delete-links/delete-links.component';

@Component({
  selector: 'app-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss']
})
export class ListLinksComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<LinkModel>;
  displayedColumns: string[] = ['id', 'title', 'actions'];
  
  links: LinkModel[] = []

  refreshData$ = new Subject<void>();
  isLoading = true;

  constructor(private linkService: LinkService, private dialog: MatDialog, private router: Router, private toastr: ToastrService) { 
    this.dataSource = new MatTableDataSource(this.links);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refreshData$.pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading=true;
        return this.linkService.getAllLinks();
      }),
    ).subscribe((res: LinkModel[]) => {
      this.links = res;
      this.dataSource.data = this.links;
      this.isLoading=false;
    });
  }
  deleteLink(id: number, title: string):void{
    const dialogRef = this.dialog.open(DeleteLinksComponent, {
      data: {
        title: title,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.linkService.deleteLink(id).subscribe(() => {
          this.refreshData$.next();
          this.toastr.success('El link ha sido eliminado correctamente');
        });
      }
    });
  }

  back():void {
    void this.router.navigate(['/admin/home']);
  }

}
