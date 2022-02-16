import { Component, OnInit } from '@angular/core';
import { RequestService } from "../services/request.service";
import { Articles } from "../interfaces/articles";
import { Router } from "@angular/router";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article: Articles | undefined;

  constructor(
    private readonly request: RequestService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.request.getArticles().subscribe(
      (articles) => {
        this.article = articles.find((article: Articles) => {
          return this.router.routerState.snapshot.url.includes(article.id.toString())
        });
      }
    )
  }

}
