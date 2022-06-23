import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-notices',
  templateUrl: './delete-notices.component.html',
  styleUrls: ['./delete-notices.component.scss']
})
export class DeleteNoticesComponent implements OnInit {

  title = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string}) {
    this.title = this.data.title;
  }

  ngOnInit(): void {
  }

}
