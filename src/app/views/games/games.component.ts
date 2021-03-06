import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openGame(game: string): void {
    this.router.navigate(['/games/'+game]);
  }
}
