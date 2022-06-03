import { Component, OnInit } from '@angular/core';
import { LinkModel } from 'src/app/models/links';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  links: LinkModel[] = [];
  isLoading = true;

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.linkService.getAllLinks().subscribe((result: LinkModel[]) =>{
      this.links = result;
      this.isLoading = false;
    })
  }
  openLink(link: string): void {
    window.open(link, '_blanck');
  }
}
