import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RequestService } from "../services/request.service";
import { Articles } from "../interfaces/articles";

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomepageComponent implements OnInit {
  articles: Articles[] = [];
  filteredArticles: Articles[] = [];
  gridColumns: number = 8;
  searchByWords: string = '';
  searchSpan: number = 12;

  constructor(
    private readonly request: RequestService,
  ) {
  }

  ngOnInit(): void {
    this.request.getArticles().subscribe(
      (articles) => {
        this.articles = articles;
        this.filteredArticles = articles;
      }
    )
    this.setColumnsOfGrid(window.innerWidth)
  }

  public onResize(event: any): void {
    const width = event.target.innerWidth;
    this.setColumnsOfGrid(width);
  }

  public setColumnsOfGrid(width: number) {
    if (width < 1000) {
      this.gridColumns = 16;
      this.searchSpan = 24;
    } else if (width < 1400) {
      this.searchSpan = 16;
      this.gridColumns = 12;
    } else {
      this.searchSpan = 12;
      this.gridColumns = 8;
    }
  }

  search() {
    this.request.getArticles().subscribe(
      (articles) => {
        this.filteredArticles = articles;
      }
    )
  }
}
