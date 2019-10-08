import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from "../models/article.model";
import { FlagArticleService } from "../flag-article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})


export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(
    private service: FlagArticleService 
  ){}

  voteUp(): boolean {
     this.article.voteUp();
     return false;
  } 

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  isAdministrator(): boolean{
    return this.article.isAdministrator();
  }

  flagArticle(article: Article){
    this.service.articleIsFlaged(article);
  }

  ngOnInit() {
  }

}
