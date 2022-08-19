import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-links',
  templateUrl: './delete-links.component.html',
  styleUrls: ['./delete-links.component.scss']
})
export class DeleteLinksComponent implements OnInit {

  title = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string}) {
    this.title = this.data.title;
  }

  ngOnInit(): void {
  }

}
