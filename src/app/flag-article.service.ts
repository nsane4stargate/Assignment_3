import { Injectable } from '@angular/core';
import { Article } from './models/article.model';

@Injectable({
  providedIn: 'root'
})

export class FlagArticleService {
  constructor() { }

  articleIsFlaged(article: Article){
    article.votes = 0;
  }
}
